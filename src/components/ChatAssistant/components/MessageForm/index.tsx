import { PaperPlaneTilt } from '@phosphor-icons/react'
import { FormEvent, useState } from 'react'
import type { MessageFormProps } from './types'

export function MessageForm({ isInputDisabled, onSendMessage }: MessageFormProps) {
  const [draft, setDraft] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!draft.trim()) return

    onSendMessage(draft)
    setDraft('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-base-button p-3">
      <input
        value={draft}
        onChange={event => setDraft(event.target.value)}
        disabled={isInputDisabled}
        placeholder="Como posso comprar um café?"
        className="flex-1 rounded-md border border-base-button bg-base-input px-3 py-2 text-sm text-base-text placeholder:text-base-label disabled:cursor-not-allowed disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={isInputDisabled || !draft.trim()}
        className="flex items-center justify-center rounded-md bg-purple-dark p-2 text-white transition-colors duration-250 hover:bg-purple disabled:cursor-not-allowed disabled:opacity-60"
      >
        <PaperPlaneTilt weight="fill" size={18} />
      </button>
    </form>
  )
}
