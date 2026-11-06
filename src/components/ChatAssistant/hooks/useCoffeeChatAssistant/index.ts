import type { Message } from '@huggingface/transformers'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { AssistantWorkerResponse } from '../../worker/types'
import type { ChatMessage, ChatStatus } from '../../types'
import { createInitialConversation, ERROR_MESSAGES } from './constants'
import type { UseCoffeeChatAssistantResult } from './types'
import {
  appendChunkToMessage,
  createEmptyAssistantMessage,
  createUserMessage,
  removeMessage,
} from './utils/messages'
import { createAssistantWorker, isTotalDownloadProgress } from './utils/worker'

type WorkerMessageEvent = MessageEvent<AssistantWorkerResponse>

export function useCoffeeChatAssistant(): UseCoffeeChatAssistantResult {
  const [status, setStatus] = useState<ChatStatus>('checking')
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [error, setError] = useState<string | null>(null)
  const workerRef = useRef<Worker | null>(null)
  const conversationRef = useRef<Message[]>(createInitialConversation())

  const getWorker = useCallback(() => {
    if (!workerRef.current) {
      workerRef.current = createAssistantWorker()
    }
    return workerRef.current
  }, [])

  useEffect(() => {
    return () => {
      workerRef.current?.terminate()
      workerRef.current = null
    }
  }, [])

  const activate = useCallback(() => {
    setError(null)
    setStatus('loading')
    setDownloadProgress(0)

    const worker = getWorker()

    worker.onmessage = (event: WorkerMessageEvent) => {
      const response = event.data

      if (response.type === 'progress' && isTotalDownloadProgress(response.data)) {
        setDownloadProgress(Math.round(response.data.progress))
      } else if (response.type === 'ready') {
        setStatus('ready')
      } else if (response.type === 'error') {
        setError(ERROR_MESSAGES.loadModel)
        setStatus('error')
      }
    }

    worker.postMessage({ type: 'load' })
  }, [getWorker])

  useEffect(() => {
    const worker = getWorker()

    worker.onmessage = (event: WorkerMessageEvent) => {
      const response = event.data
      if (response.type !== 'cacheStatus') return

      if (response.data.cached) {
        activate()
      } else {
        setStatus('idle')
      }
    }

    worker.postMessage({ type: 'checkCache' })
    // Only run once, on mount: `activate` is stable in practice (its own
    // deps never change), and re-running this on every `activate` identity
    // change would re-check the cache after every load attempt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getWorker])

  const sendMessage = useCallback((text: string) => {
    const content = text.trim()
    if (!content || status !== 'ready') return

    const worker = getWorker()
    const userMessage = createUserMessage(content)
    const assistantMessage = createEmptyAssistantMessage()
    let streamedReply = ''

    conversationRef.current = [...conversationRef.current, { role: 'user', content }]

    setMessages(current => [...current, userMessage, assistantMessage])
    setStatus('generating')
    setError(null)

    worker.onmessage = (event: WorkerMessageEvent) => {
      const response = event.data

      if (response.type === 'chunk') {
        streamedReply += response.data
        setMessages(current => appendChunkToMessage(current, assistantMessage.id, response.data))
      } else if (response.type === 'complete') {
        conversationRef.current = [
          ...conversationRef.current,
          { role: 'assistant', content: streamedReply },
        ]
        setStatus('ready')
      } else if (response.type === 'error') {
        setError(ERROR_MESSAGES.generateReply)
        setMessages(current => removeMessage(current, assistantMessage.id))
        setStatus('ready')
      }
    }

    worker.postMessage({ type: 'generate', data: { messages: conversationRef.current } })
  }, [getWorker, status])

  return { status, downloadProgress, messages, error, activate, sendMessage }
}
