export const MODEL_ID = 'onnx-community/Qwen2.5-0.5B-Instruct'
export const PIPELINE_TASK = 'text-generation'

export const MAX_WASM_THREADS = 8

export const GENERATION_OPTIONS = {
  max_new_tokens: 256,
  do_sample: false,
  repetition_penalty: 1.1,
} as const

export const LOG_PREFIX = '[ChatAssistant worker]'
