import { pipeline, type TextGenerationPipeline } from '@huggingface/transformers'
import { MODEL_ID, PIPELINE_TASK } from './constants'
import { detectInferenceDevice, getModelDtype } from './device'
import type { DownloadProgressCallback } from './types'

let pipelinePromise: Promise<TextGenerationPipeline> | null = null

// Loads the model once and shares the same instance across requests. A failed
// load clears the cache so the next call can retry.
export function getTextGenerationPipeline(onDownloadProgress: DownloadProgressCallback) {
  if (!pipelinePromise) {
    pipelinePromise = (async () => {
      const device = await detectInferenceDevice()

      return pipeline(PIPELINE_TASK, MODEL_ID, {
        dtype: getModelDtype(device),
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
