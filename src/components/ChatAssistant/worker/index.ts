import { configureWasmThreads } from './configureWasmThreads'
import { handleCheckCache, handleGenerate, handleLoadModel } from './handlers'
import type { AssistantWorkerRequest } from './types'

configureWasmThreads()

self.addEventListener('message', (event: MessageEvent<AssistantWorkerRequest>) => {
  const request = event.data

  switch (request.type) {
    case 'checkCache':
      return handleCheckCache()
    case 'load':
      return handleLoadModel()
    case 'generate':
      return handleGenerate(request.data.messages)
  }
})
