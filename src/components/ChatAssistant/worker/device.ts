import type { InferenceDevice, ModelDtype, NavigatorWithGpu } from './types'

// Checking `'gpu' in navigator` is not enough: the API can exist while
// requestAdapter() still fails (missing GPU drivers, sandboxed/headless
// Chrome, etc). We must confirm a real adapter is obtainable *before* ever
// calling pipeline() with device: 'webgpu' — once onnxruntime-web attempts
// (and fails) to initialize its WebGPU backend, it leaves the whole worker's
// ONNX Runtime instance unable to fall back to WASM in the same session.
export async function detectInferenceDevice(): Promise<InferenceDevice> {
  const gpu = (navigator as NavigatorWithGpu).gpu
  if (!gpu) return 'wasm'

  try {
    const adapter = await gpu.requestAdapter()
    // The q4f16 model needs the `shader-f16` feature. Many GPUs/drivers expose
    // an adapter without it, and the failure only shows up at generation time
    // ("Program Gather requires f16 but the device does not support it").
    return adapter?.features.has('shader-f16') ? 'webgpu' : 'wasm'
  } catch {
    return 'wasm'
  }
}

export function getModelDtype(device: InferenceDevice): ModelDtype {
  return device === 'webgpu' ? 'q4f16' : 'q4'
}
