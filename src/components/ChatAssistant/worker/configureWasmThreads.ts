import { env } from '@huggingface/transformers'
import { MAX_WASM_THREADS } from './constants'

// Multi-threaded WASM only works when the page is cross-origin isolated
// (see COOP/COEP headers in vite.config.ts); otherwise ORT stays at 1 thread.
export function configureWasmThreads() {
  if (!self.crossOriginIsolated) return

  const availableThreads = navigator.hardwareConcurrency - 1
  env.backends.onnx.wasm!.numThreads = Math.max(1, Math.min(availableThreads, MAX_WASM_THREADS))
}
