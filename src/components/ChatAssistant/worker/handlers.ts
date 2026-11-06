import { ModelRegistry, TextStreamer, type Message } from '@huggingface/transformers'
import { GENERATION_OPTIONS, LOG_PREFIX, MODEL_ID, PIPELINE_TASK } from './constants'
import { detectInferenceConfig } from './device'
import { postResponse } from './postResponse'
import { getTextGenerationPipeline } from './textGenerationPipeline'

export async function handleCheckCache() {
  try {
    const config = await detectInferenceConfig()
    if (!config) throw new Error('WebGPU is not available')
    const cached = await ModelRegistry.is_pipeline_cached(PIPELINE_TASK, MODEL_ID, {
      dtype: config.dtype,
    })
    postResponse({ type: 'cacheStatus', data: { cached } })
  } catch (error) {
    console.error(`${LOG_PREFIX} failed to check cache`, error)
    postResponse({ type: 'cacheStatus', data: { cached: false } })
  }
}

export async function handleLoadModel() {
  try {
    await getTextGenerationPipeline((info) => {
      postResponse({ type: 'progress', data: info })
    })
    postResponse({ type: 'ready' })
  } catch (error) {
    console.error(`${LOG_PREFIX} failed to load model`, error)
    postResponse({ type: 'error', data: String(error) })
  }
}

export async function handleGenerate(messages: Message[]) {
  try {
    const generator = await getTextGenerationPipeline(() => {})

    const streamer = new TextStreamer(generator.tokenizer, {
      skip_prompt: true,
      skip_special_tokens: true,
      callback_function: (text: string) => {
        postResponse({ type: 'chunk', data: text })
      },
    })

    await generator(messages, { ...GENERATION_OPTIONS, streamer })

    postResponse({ type: 'complete' })
  } catch (error) {
    console.error(`${LOG_PREFIX} failed to generate`, error)
    postResponse({ type: 'error', data: String(error) })
  }
}
