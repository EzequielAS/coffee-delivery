import type { Message } from '@huggingface/transformers'
import { chatSystemPrompt } from '../../systemPrompt'

export const ERROR_MESSAGES = {
  loadModel: 'Não foi possível carregar o modelo de IA local. Tente novamente.',
  generateReply: 'O assistente não conseguiu responder agora. Tente novamente.',
} as const

export function createInitialConversation(): Message[] {
  return [{ role: 'system', content: chatSystemPrompt }]
}
