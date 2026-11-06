import type { ChatMessage, ChatStatus } from '../../types'

export interface ChatWindowProps {
  status: ChatStatus
  downloadProgress: number
  messages: ChatMessage[]
  error: string | null
  onActivate: () => void
  onSendMessage: (text: string) => void
}
