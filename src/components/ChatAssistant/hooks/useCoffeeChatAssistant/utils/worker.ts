import type { TotalDownloadProgress } from '../types'

export function createAssistantWorker() {
  return new Worker(new URL('../../../worker/index.ts', import.meta.url), { type: 'module' })
}

export function isTotalDownloadProgress(info: unknown): info is TotalDownloadProgress {
  return (
    typeof info === 'object' &&
    info !== null &&
    (info as { status?: unknown }).status === 'progress_total'
  )
}
