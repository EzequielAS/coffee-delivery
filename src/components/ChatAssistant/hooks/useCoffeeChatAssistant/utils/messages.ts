import type { ChatMessage } from '../../../types'

export function createUserMessage(content: string): ChatMessage {
  return { id: crypto.randomUUID(), role: 'user', content }
}

export function createEmptyAssistantMessage(): ChatMessage {
  return { id: crypto.randomUUID(), role: 'assistant', content: '' }
}

export function appendChunkToMessage(messages: ChatMessage[], messageId: string, chunk: string) {
  return messages.map(message =>
    message.id === messageId ? { ...message, content: message.content + chunk } : message,
  )
}

export function removeMessage(messages: ChatMessage[], messageId: string) {
  return messages.filter(message => message.id !== messageId)
}
