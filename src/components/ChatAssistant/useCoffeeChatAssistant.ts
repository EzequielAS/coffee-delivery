import { useCallback, useEffect, useRef, useState } from 'react'
import type { LanguageModelAvailability, LanguageModelSession } from '../../types/chrome-ai'
import { chatSystemPrompt } from './systemPrompt'

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export type ChatStatus =
  | 'checking'
  | 'unsupported'
  | 'unavailable'
  | 'downloadable'
  | 'downloading'
  | 'available';

function createSession() {
  const languageModel = window.LanguageModel
  if (!languageModel) throw new Error('LanguageModel indisponível')

  return languageModel.create({
    initialPrompts: [{ role: 'system', content: chatSystemPrompt }],
  })
}

export function useCoffeeChatAssistant() {
  const [status, setStatus] = useState<ChatStatus>('checking')
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isResponding, setIsResponding] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const sessionRef = useRef<LanguageModelSession | null>(null)

  useEffect(() => {
    const languageModel = window.LanguageModel

    if (!languageModel) {
      setStatus('unsupported')
      return
    }

    languageModel
      .availability()
      .then((availability: LanguageModelAvailability) => setStatus(availability))
      .catch(() => setStatus('unavailable'))
  }, [])

  useEffect(() => {
    return () => {
      sessionRef.current?.destroy()
      sessionRef.current = null
    }
  }, [])

  const activate = useCallback(async () => {
    setError(null)
    setStatus('downloading')
    setDownloadProgress(0)

    try {
      const languageModel = window.LanguageModel
      if (!languageModel) throw new Error('LanguageModel indisponível')

      const session = await languageModel.create({
        initialPrompts: [{ role: 'system', content: chatSystemPrompt }],
        monitor(monitor) {
          monitor.addEventListener('downloadprogress', (event) => {
            setDownloadProgress(Math.round(event.loaded * 100))
          })
        },
      })

      sessionRef.current = session
      setStatus('available')
    } catch {
      setError('Não foi possível ativar o assistente. Tente novamente.')
      setStatus('unavailable')
    }
  }, [])

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || isResponding) return

    if (!sessionRef.current) {
      try {
        sessionRef.current = await createSession()
      } catch {
        setError('Não foi possível iniciar o assistente. Tente novamente.')
        return
      }
    }

    const session = sessionRef.current
    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: 'user', content: trimmed }
    const assistantMessageId = crypto.randomUUID()

    setMessages(current => [
      ...current,
      userMessage,
      { id: assistantMessageId, role: 'assistant', content: '' },
    ])
    setIsResponding(true)
    setError(null)

    try {
      const stream = session.promptStreaming(trimmed)
      let result = ''

      for await (const chunk of stream) {
        result = chunk.startsWith(result) ? chunk : result + chunk
        const resultSoFar = result

        setMessages(current =>
          current.map(message =>
            message.id === assistantMessageId ? { ...message, content: resultSoFar } : message,
          ),
        )
      }
    } catch {
      setError('O assistente não conseguiu responder agora. Tente novamente.')
      setMessages(current => current.filter(message => message.id !== assistantMessageId))
    } finally {
      setIsResponding(false)
    }
  }, [isResponding])

  return {
    status,
    downloadProgress,
    messages,
    isResponding,
    error,
    activate,
    sendMessage,
  }
}
