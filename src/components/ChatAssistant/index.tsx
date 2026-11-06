import { ChatCircleDots, Coffee, PaperPlaneTilt, X } from '@phosphor-icons/react'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { cn } from '../../utils/cn'
import { useCoffeeChatAssistant } from './useCoffeeChatAssistant'

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const { status, downloadProgress, messages, error, activate, sendMessage } = useCoffeeChatAssistant()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!draft.trim()) return

    sendMessage(draft)
    setDraft('')
  }

  const canChat = status === 'ready' || status === 'generating'

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex h-[28rem] max-h-[70vh] w-[22rem] max-w-[90vw] flex-col overflow-hidden rounded-xl border border-base-button bg-white shadow-xl">
          <header className="flex items-center gap-2 bg-purple-dark px-4 py-3 text-white">
            <Coffee weight="fill" size={20} />
            <span className="font-title text-sm font-bold leading-[1.4rem]">Assistente Coffee Delivery</span>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-base-card/40 p-4">
            {status === 'checking' && (
              <p className="text-sm text-base-label">Verificando o assistente...</p>
            )}

            {status === 'idle' && (
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm text-base-text">
                  O assistente roda um modelo de IA (Qwen2.5 0.5B) direto no seu navegador. Na primeira vez,
                  baixa cerca de 300–400MB — depois disso fica salvo para as próximas visitas.
                </p>
                <button
                  type="button"
                  onClick={activate}
                  className="rounded-md bg-yellow px-3 py-2 text-xs font-bold text-white transition-colors duration-250 hover:bg-yellow-dark"
                >
                  Ativar assistente
                </button>
              </div>
            )}

            {status === 'loading' && (
              <div className="flex flex-col gap-2">
                <p className="text-sm text-base-text">Baixando modelo de IA... {downloadProgress}%</p>
                <div className="h-2 w-full overflow-hidden rounded-full bg-base-button">
                  <div
                    className="h-full rounded-full bg-yellow transition-all duration-300"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {canChat && messages.length === 0 && (
              <p className="text-sm text-base-label">
                Pergunte, por exemplo: "Como eu compro um café?" ou "Como eu pago meu pedido?"
              </p>
            )}

            {messages.map(message => (
              <div
                key={message.id}
                className={cn('flex', message.role === 'user' ? 'justify-end' : 'justify-start')}
              >
                <p
                  className={cn(
                    'max-w-[85%] rounded-lg px-3 py-2 text-sm',
                    message.role === 'user'
                      ? 'bg-purple-light text-purple-dark'
                      : 'bg-base-button text-base-text',
                  )}
                >
                  {message.content || '...'}
                </p>
              </div>
            ))}

            {error && (
              <div className="flex flex-col items-start gap-2">
                <p className="text-xs text-red-600">{error}</p>
                {status === 'error' && (
                  <button
                    type="button"
                    onClick={activate}
                    className="rounded-md bg-base-button px-3 py-2 text-xs font-bold text-base-text transition-colors duration-250 hover:bg-base-hover"
                  >
                    Tentar novamente
                  </button>
                )}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-base-button p-3">
            <input
              value={draft}
              onChange={event => setDraft(event.target.value)}
              disabled={status !== 'ready'}
              placeholder="Como posso comprar um café?"
              className="flex-1 rounded-md border border-base-button bg-base-input px-3 py-2 text-sm text-base-text placeholder:text-base-label disabled:cursor-not-allowed disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status !== 'ready' || !draft.trim()}
              className="flex items-center justify-center rounded-md bg-purple-dark p-2 text-white transition-colors duration-250 hover:bg-purple disabled:cursor-not-allowed disabled:opacity-60"
            >
              <PaperPlaneTilt weight="fill" size={18} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(current => !current)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-dark text-white shadow-lg transition-colors duration-250 hover:bg-purple"
        aria-label={isOpen ? 'Fechar assistente' : 'Abrir assistente de compra de café'}
      >
        {isOpen ? <X weight="bold" size={24} /> : <ChatCircleDots weight="fill" size={26} />}
      </button>
    </div>
  )
}
