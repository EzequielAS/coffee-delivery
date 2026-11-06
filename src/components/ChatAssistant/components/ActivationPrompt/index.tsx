import type { ActivationPromptProps } from './types'

export function ActivationPrompt({ onActivate }: ActivationPromptProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-sm text-base-text">
        O assistente roda um modelo de IA (Qwen2.5 0.5B) direto no seu navegador. Na primeira vez,
        baixa cerca de 300–400MB — depois disso fica salvo para as próximas visitas.
      </p>
      <button
        type="button"
        onClick={onActivate}
        className="rounded-md bg-yellow px-3 py-2 text-xs font-bold text-white transition-colors duration-250 hover:bg-yellow-dark"
      >
        Ativar assistente
      </button>
    </div>
  )
}
