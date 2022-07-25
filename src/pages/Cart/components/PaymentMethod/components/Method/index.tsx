import { ReactNode } from 'react'

import { MethodContainer, Text } from './styles'

interface MethodProps {
  title: string;
  icon: ReactNode;
  isSelected: boolean;
}

export function Method({ title, icon, isSelected }: MethodProps) {
  return (
    <MethodContainer isSelected={isSelected}>
      {icon}
      <Text>{title}</Text>
    </MethodContainer>
  )
}