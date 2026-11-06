import { cn } from '../../../../utils/cn'
import { TypingIndicator } from '../TypingIndicator'
import type { MessageBubbleProps } from './types'

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUserMessage = message.role === 'user'

  return (
    <div className={cn('flex', isUserMessage ? 'justify-end' : 'justify-start')}>
      <p
        className={cn(
          'max-w-[85%] rounded-lg px-3 py-2 text-sm',
          isUserMessage ? 'bg-purple-light text-purple-dark' : 'bg-base-button text-base-text',
        )}
      >
        {message.content || <TypingIndicator />}
      </p>
    </div>
  )
}
