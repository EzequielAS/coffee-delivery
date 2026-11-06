import type { ChatMessage, ChatStatus } from '../../types'

export interface TotalDownloadProgress {
  status: 'progress_total'
  progress: number
}

export interface UseCoffeeChatAssistantResult {
  status: ChatStatus
  downloadProgress: number
  messages: ChatMessage[]
  error: string | null
  activate: () => void
  sendMessage: (text: string) => void
}
