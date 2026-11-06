import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState
} from 'react'
import { cn } from '../../utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  optional?: boolean;
  error?: string;
  focus?: () => void;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
= ({ width, optional, error, focus, className, style, ...rest }, ref) => {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocusInput() {
    setIsFocused(true)
  }

  function handleBlurInput() {
    setIsFocused(false)
  }

  function changeFocusToInput() {
    if (!focus) return

    focus()
    setIsFocused(true)
  }

  return (
    <div
      className={cn(
        'relative flex cursor-text items-center rounded border bg-base-input transition-colors duration-200 ease-in-out',
        isFocused ? 'border-yellow-dark' : 'border-base-button',
        className,
      )}
      style={{ width, ...style }}
      onClick={changeFocusToInput}
    >
      <input
        ref={ref}
        {...rest}
        className="h-full flex-1 overflow-hidden border-none bg-transparent p-3 text-sm text-base-text placeholder:text-base-label"
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
      />

      {optional && <span className="mx-[0.3rem] text-xs italic text-base-label">Opcional</span>}

      {error && (
        <span className="absolute bottom-[-3px] w-full translate-y-full text-[0.65rem] text-red-600">
          {error}
        </span>
      )}
    </div>
  )
}

export const Input = forwardRef(InputBase)
