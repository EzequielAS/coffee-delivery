const DOT_DELAYS_IN_MS = [0, 150, 300]

export function TypingIndicator() {
  return (
    <span role="status" aria-label="O assistente está pensando" className="flex items-center gap-1 py-1">
      {DOT_DELAYS_IN_MS.map(delay => (
        <span
          key={delay}
          aria-hidden="true"
          className="size-1.5 animate-bounce rounded-full bg-base-label"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </span>
  )
}
