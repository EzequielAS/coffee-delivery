import { useEffect, useState } from 'react'
import { detectInferenceConfig } from '../worker/device'

// null while detecting, then true/false.
export function useWebGpuSupport() {
  const [isSupported, setIsSupported] = useState<boolean | null>(null)

  useEffect(() => {
    let isCancelled = false
    detectInferenceConfig().then(config => {
      if (!isCancelled) setIsSupported(config !== null)
    })
    return () => {
      isCancelled = true
    }
  }, [])

  return isSupported
}
