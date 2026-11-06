import type { AssistantWorkerResponse } from './types'

export function postResponse(response: AssistantWorkerResponse) {
  self.postMessage(response)
}
