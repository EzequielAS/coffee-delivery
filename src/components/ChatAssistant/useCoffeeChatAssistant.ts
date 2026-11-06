import type { Message } from '@huggingface/transformers'
import { useCallback, useEffect, useRef, useState } from 'react'
import { chatSystemPrompt } from './systemPrompt'

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export type ChatStatus = 'checking' | 'idle' | 'loading' | 'ready' | 'generating' | 'error';

interface ProgressTotalInfo {
  status: 'progress_total';
  progress: number;
}

function isProgressTotal(info: unknown): info is ProgressTotalInfo {
  return typeof info === 'object' && info !== null && (info as { status?: unknown }).status === 'progress_total'
}

export function useCoffeeChatAssistant() {
  const [status, setStatus] = useState<ChatStatus>('checking')
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [error, setError] = useState<string | null>(null)
  const workerRef = useRef<Worker | null>(null)
  const historyRef = useRef<Message[]>([{ role: 'system', content: chatSystemPrompt }])
  const assistantMessageIdRef = useRef<string | null>(null)

  const getWorker = useCallback(() => {
    if (!workerRef.current) {
      workerRef.current = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' })
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

    worker.onmessage = (event: MessageEvent) => {
      const message = event.data

      if (message.type === 'progress' && isProgressTotal(message.data)) {
        setDownloadProgress(Math.round(message.data.progress))
      } else if (message.type === 'ready') {
        setStatus('ready')
      } else if (message.type === 'error') {
        setError('Não foi possível carregar o modelo de IA local. Tente novamente.')
        setStatus('error')
      }
    }

    worker.postMessage({ type: 'load' })
  }, [getWorker])

  useEffect(() => {
    const worker = getWorker()

    worker.onmessage = (event: MessageEvent) => {
      if (event.data.type === 'cacheStatus') {
        if (event.data.data.cached) {
          activate()
        } else {
          setStatus('idle')
        }
      }
    }

    worker.postMessage({ type: 'checkCache' })
    // Only run once, on mount: `activate` is stable in practice (its own
    // deps never change), and re-running this on every `activate` identity
    // change would re-check the cache after every load attempt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getWorker])

  const sendMessage = useCallback((text: string) => {
    const trimmed = text.trim()
    if (!trimmed || status !== 'ready') return

    const worker = getWorker()
    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: 'user', content: trimmed }
    const assistantMessageId = crypto.randomUUID()
    assistantMessageIdRef.current = assistantMessageId

    historyRef.current = [...historyRef.current, { role: 'user', content: trimmed }]

    setMessages(current => [
      ...current,
      userMessage,
      { id: assistantMessageId, role: 'assistant', content: '' },
    ])
    setStatus('generating')
    setError(null)

    worker.onmessage = (event: MessageEvent) => {
      const message = event.data
      const currentAssistantId = assistantMessageIdRef.current
      if (!currentAssistantId) return

      if (message.type === 'chunk') {
        setMessages(current =>
          current.map(item =>
            item.id === currentAssistantId ? { ...item, content: item.content + message.data } : item,
          ),
        )
      } else if (message.type === 'complete') {
        setMessages(current => {
          const assistantMessage = current.find(item => item.id === currentAssistantId)
          if (assistantMessage) {
            historyRef.current = [...historyRef.current, { role: 'assistant', content: assistantMessage.content }]
          }
          return current
        })
        setStatus('ready')
      } else if (message.type === 'error') {
        setError('O assistente não conseguiu responder agora. Tente novamente.')
        setMessages(current => current.filter(item => item.id !== currentAssistantId))
        setStatus('ready')
      }
    }

    worker.postMessage({ type: 'generate', data: { messages: historyRef.current } })
  }, [getWorker, status])

  return {
    status,
    downloadProgress,
    messages,
    error,
    activate,
    sendMessage,
  }
}
