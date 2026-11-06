import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

export type TypesButton = 'default' | 'buy' | 'clean' | 'cart'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  label?: string;
  buttonType: TypesButton;
}

const buttonTypeClasses: Record<TypesButton, string> = {
  cart: 'bg-yellow-light text-yellow-dark',
  buy: 'bg-purple-dark text-base-card hover:bg-purple',
  clean: 'bg-base-button text-xs text-base-text hover:bg-base-hover [&_svg]:text-purple',
  default: 'w-full bg-yellow p-3 text-sm leading-[1.4rem] text-white hover:bg-yellow-dark',
}

export function Button({ icon, label, buttonType, className, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex select-none items-center justify-center rounded-md border-0 p-2 transition-colors duration-250',
        icon && label && 'gap-1',
        buttonTypeClasses[buttonType],
        className,
      )}
      {...rest}
    >
      {icon}
      {label}
    </button>
  )
}
