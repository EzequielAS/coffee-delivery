import { 
  forwardRef, 
  ForwardRefRenderFunction, 
  InputHTMLAttributes, 
  useState 
} from 'react'

import { InputContainer, InputStyled, Text, ErrorInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  optional?: boolean;
  error?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
= ({ width, optional, error, ...rest }, ref) => {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocusInput() {
    setIsFocused(true)
  }

  function handleBlurInput() {
    setIsFocused(false)
  }

  return (
    <InputContainer 
      isFocused={isFocused}
      width={width}
    >
      <InputStyled  
        ref={ref}
        {...rest} 
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
      />

      {optional && <Text>Opcional</Text>}

      {error && <ErrorInput>{error}</ErrorInput>}
    </InputContainer>
  )
}

export const Input = forwardRef(InputBase)