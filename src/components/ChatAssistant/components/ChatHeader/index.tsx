import { Coffee } from '@phosphor-icons/react'

export function ChatHeader() {
  return (
    <header className="flex items-center gap-2 bg-purple-dark px-4 py-3 text-white">
      <Coffee weight="fill" size={20} />
      <span className="font-title text-sm font-bold leading-[1.4rem]">Assistente Coffee Delivery</span>
    </header>
  )
}
