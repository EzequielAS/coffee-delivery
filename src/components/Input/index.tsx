import { InputHTMLAttributes, useRef, useState } from 'react'

import { InputContainer, InputStyled, Text } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  optional?: boolean;
}

export function Input({ width, optional, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFocusInput() {
    setIsFocused(true)

    if(inputRef.current)
      inputRef.current.focus()
  }

  function handleBlurInput() {
    setIsFocused(false)
  }

  return (
    <InputContainer 
      isFocused={isFocused}
      width={width}
      onClick={handleFocusInput}
      onBlur={handleBlurInput}
    >
      <InputStyled  
        ref={inputRef}
        {...rest} 
      />

      {optional && <Text>Opcional</Text>}
    </InputContainer>
  )
}