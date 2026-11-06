import {
  ModelRegistry,
  pipeline,
  TextStreamer,
  type Message,
  type TextGenerationPipeline,
} from '@huggingface/transformers'

const MODEL_ID = 'onnx-community/Qwen2.5-0.5B-Instruct'
const TASK = 'text-generation'

// Checking `'gpu' in navigator` is not enough: the API can exist while
// requestAdapter() still fails (missing GPU drivers, sandboxed/headless
// Chrome, etc). We must confirm a real adapter is obtainable *before* ever
// calling pipeline() with device: 'webgpu' — once onnxruntime-web attempts
// (and fails) to initialize its WebGPU backend, it leaves the whole worker's
// ONNX Runtime instance unable to fall back to WASM in the same session.
async function detectDevice(): Promise<'webgpu' | 'wasm'> {
  const gpu = (navigator as { gpu?: { requestAdapter(): Promise<unknown> } }).gpu
  if (!gpu) return 'wasm'

  try {
    const adapter = await gpu.requestAdapter()
    return adapter ? 'webgpu' : 'wasm'
  } catch {
    return 'wasm'
  }
}

function dtypeFor(device: 'webgpu' | 'wasm') {
  return device === 'webgpu' ? 'q4f16' : 'q4'
}

class CoffeeAssistantPipeline {
  private static instance: Promise<TextGenerationPipeline> | null = null

  static getInstance(progressCallback: (info: unknown) => void) {
    if (!this.instance) {
      this.instance = (async () => {
        const device = await detectDevice()

        return pipeline(TASK, MODEL_ID, {
          dtype: dtypeFor(device),
          device,
          progress_callback: progressCallback,
        })
      })().catch((error) => {
        this.instance = null
        throw error
      })
    }

    return this.instance
  }
}

type WorkerRequest =
  | { type: 'checkCache' }
  | { type: 'load' }
  | { type: 'generate'; data: { messages: Message[] } }

self.addEventListener('message', async (event: MessageEvent<WorkerRequest>) => {
  const request = event.data

  if (request.type === 'checkCache') {
    try {
      const device = await detectDevice()
      const cached = await ModelRegistry.is_pipeline_cached(TASK, MODEL_ID, { dtype: dtypeFor(device) })
      self.postMessage({ type: 'cacheStatus', data: { cached } })
    } catch (error) {
      console.error('[ChatAssistant worker] failed to check cache', error)
      self.postMessage({ type: 'cacheStatus', data: { cached: false } })
    }
    return
  }

  if (request.type === 'load') {
    try {
      await CoffeeAssistantPipeline.getInstance((info) => {
        self.postMessage({ type: 'progress', data: info })
      })
      self.postMessage({ type: 'ready' })
    } catch (error) {
      console.error('[ChatAssistant worker] failed to load model', error)
      self.postMessage({ type: 'error', data: String(error) })
    }
    return
  }

  if (request.type === 'generate') {
    try {
      const generator = await CoffeeAssistantPipeline.getInstance(() => {})

      const streamer = new TextStreamer(generator.tokenizer, {
        skip_prompt: true,
        skip_special_tokens: true,
        callback_function: (text: string) => {
          self.postMessage({ type: 'chunk', data: text })
        },
      })

      await generator(request.data.messages, {
        max_new_tokens: 256,
        do_sample: false,
        repetition_penalty: 1.1,
        streamer,
      })

      self.postMessage({ type: 'complete' })
    } catch (error) {
      console.error('[ChatAssistant worker] failed to generate', error)
      self.postMessage({ type: 'error', data: String(error) })
    }
  }
})
