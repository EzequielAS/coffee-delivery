import { useState } from 'react'
import { ChatToggleButton } from './components/ChatToggleButton'
import { ChatWindow } from './components/ChatWindow'
import { useCoffeeChatAssistant } from './hooks/useCoffeeChatAssistant'

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const { status, downloadProgress, messages, error, activate, sendMessage } = useCoffeeChatAssistant()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <ChatWindow
          status={status}
          downloadProgress={downloadProgress}
          messages={messages}
          error={error}
          onActivate={activate}
          onSendMessage={sendMessage}
        />
      )}

      <ChatToggleButton isOpen={isOpen} onToggle={() => setIsOpen(current => !current)} />
    </div>
  )
}
