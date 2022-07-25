import { ReactNode } from 'react'

import { CircleContainer } from './styles'

interface CircleIconProps {
  icon: ReactNode;
  bgColor: string;
}

export function CircleIcon({ bgColor, icon }: CircleIconProps) {
  return (
    <CircleContainer bgColor={bgColor}>
      {icon}
    </CircleContainer>
  )
}