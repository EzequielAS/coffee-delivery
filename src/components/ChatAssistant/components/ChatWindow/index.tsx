import { useEffect, useRef } from 'react'
import { ActivationPrompt } from '../ActivationPrompt'
import { ChatErrorNotice } from '../ChatErrorNotice'
import { ChatHeader } from '../ChatHeader'
import { DownloadProgress } from '../DownloadProgress'
import { MessageBubble } from '../MessageBubble'
import { MessageForm } from '../MessageForm'
import type { ChatWindowProps } from './types'

export function ChatWindow({
  status,
  downloadProgress,
  messages,
  error,
  onActivate,
  onSendMessage,
}: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const canChat = status === 'ready' || status === 'generating'

  return (
    <div className="flex h-[28rem] max-h-[70vh] w-[22rem] max-w-[90vw] flex-col overflow-hidden rounded-xl border border-base-button bg-white shadow-xl">
      <ChatHeader />

      <div className="flex-1 space-y-3 overflow-y-auto bg-base-card/40 p-4">
        {status === 'checking' && (
          <p className="text-sm text-base-label">Verificando o assistente...</p>
        )}

        {status === 'idle' && <ActivationPrompt onActivate={onActivate} />}

        {status === 'loading' && <DownloadProgress progress={downloadProgress} />}

        {canChat && messages.length === 0 && (
          <p className="text-sm text-base-label">
            Pergunte, por exemplo: "Como eu compro um café?" ou "Como eu pago meu pedido?"
          </p>
        )}

        {messages.map(message => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {error && (
          <ChatErrorNotice message={error} canRetry={status === 'error'} onRetry={onActivate} />
        )}

        <div ref={messagesEndRef} />
      </div>

      <MessageForm isInputDisabled={status !== 'ready'} onSendMessage={onSendMessage} />
    </div>
  )
}
