import type { InferenceConfig, NavigatorWithGpu } from './types'

// The assistant only runs on WebGPU, so this returns null when it is not
// available and callers must not offer the feature.
//
// Checking `'gpu' in navigator` is not enough: the API can exist while
// requestAdapter() still fails (missing GPU drivers, sandboxed/headless
// Chrome, etc), so we confirm a real adapter is obtainable.
//
// The `shader-f16` feature only decides the weights: q4f16 needs it, while q4
// runs on any WebGPU adapter (fp32 activations, a bit slower but still on GPU).
export async function detectInferenceConfig(): Promise<InferenceConfig | null> {
  const gpu = (navigator as NavigatorWithGpu).gpu
  if (!gpu) return null

  try {
    const adapter = await gpu.requestAdapter()
    if (!adapter) return null

    return { device: 'webgpu', dtype: adapter.features.has('shader-f16') ? 'q4f16' : 'q4' }
  } catch {
    return null
  }
}
