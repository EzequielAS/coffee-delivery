import { ChatCircleDots, X } from '@phosphor-icons/react'
import type { ChatToggleButtonProps } from './types'

export function ChatToggleButton({ isOpen, onToggle }: ChatToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-dark text-white shadow-lg transition-colors duration-250 hover:bg-purple"
      aria-label={isOpen ? 'Fechar assistente' : 'Abrir assistente de compra de café'}
    >
      {isOpen ? <X weight="bold" size={24} /> : <ChatCircleDots weight="fill" size={26} />}
    </button>
  )
}
