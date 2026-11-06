import { pipeline, type TextGenerationPipeline } from '@huggingface/transformers'
import { LOG_PREFIX, MODEL_ID, PIPELINE_TASK } from './constants'
import { detectInferenceConfig } from './device'
import type { DownloadProgressCallback } from './types'

let pipelinePromise: Promise<TextGenerationPipeline> | null = null

// Loads the model once and shares the same instance across requests. A failed
// load clears the cache so the next call can retry.
export function getTextGenerationPipeline(onDownloadProgress: DownloadProgressCallback) {
  if (!pipelinePromise) {
    pipelinePromise = (async () => {
      const config = await detectInferenceConfig()
      if (!config) throw new Error('WebGPU is not available')
      const { device, dtype } = config
      console.info(`${LOG_PREFIX} inference: ${device} / ${dtype}`)

      return pipeline(PIPELINE_TASK, MODEL_ID, {
        dtype,
        device,
        progress_callback: onDownloadProgress,
      })
    })().catch((error) => {
      pipelinePromise = null
      throw error
    })
  }

  return pipelinePromise
}
