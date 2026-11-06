import type { ChatErrorNoticeProps } from './types'

export function ChatErrorNotice({ message, canRetry, onRetry }: ChatErrorNoticeProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-xs text-red-600">{message}</p>
      {canRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-md bg-base-button px-3 py-2 text-xs font-bold text-base-text transition-colors duration-250 hover:bg-base-hover"
        >
          Tentar novamente
        </button>
      )}
    </div>
  )
}
