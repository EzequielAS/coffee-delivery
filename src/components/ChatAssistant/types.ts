export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export type ChatStatus = 'checking' | 'idle' | 'loading' | 'ready' | 'generating' | 'error'
