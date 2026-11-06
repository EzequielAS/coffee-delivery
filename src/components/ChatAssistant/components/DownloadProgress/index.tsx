import type { DownloadProgressProps } from './types'

export function DownloadProgress({ progress }: DownloadProgressProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-base-text">Baixando modelo de IA... {progress}%</p>
      <div className="h-2 w-full overflow-hidden rounded-full bg-base-button">
        <div
          className="h-full rounded-full bg-yellow transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
