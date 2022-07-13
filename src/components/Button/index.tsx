import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonStyled } from './styles'

export type TypesButton = 'default' | 'buy' | 'clean' | 'cart'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  label?: string;
  buttonType: TypesButton;
}

export function Button({ icon, label, buttonType }: ButtonProps) {
  return (
    <ButtonStyled buttonType={buttonType}>
      {icon}
      {label}
    </ButtonStyled>
  )
}