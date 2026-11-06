import type { Message } from '@huggingface/transformers'

export type InferenceDevice = 'webgpu' | 'wasm'

export type ModelDtype = 'q4f16' | 'q4'

export type AssistantWorkerRequest =
  | { type: 'checkCache' }
  | { type: 'load' }
  | { type: 'generate'; data: { messages: Message[] } }

export type AssistantWorkerResponse =
  | { type: 'cacheStatus'; data: { cached: boolean } }
  | { type: 'progress'; data: unknown }
  | { type: 'ready' }
  | { type: 'chunk'; data: string }
  | { type: 'complete' }
  | { type: 'error'; data: string }

export type DownloadProgressCallback = (info: unknown) => void

export interface WebGpuAdapterLike {
  features: Set<string>
}

export interface NavigatorWithGpu {
  gpu?: { requestAdapter(): Promise<WebGpuAdapterLike | null> }
}
