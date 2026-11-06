import { ReactNode } from 'react'

interface CircleIconProps {
  icon: ReactNode;
  bgColor: string;
}

export function CircleIcon({ bgColor, icon }: CircleIconProps) {
  return (
    <div
      className="flex items-center rounded-full p-2 text-background"
      style={{ background: bgColor }}
    >
      {icon}
    </div>
  )
}
