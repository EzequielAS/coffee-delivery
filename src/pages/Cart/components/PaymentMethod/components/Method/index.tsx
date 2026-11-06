import { ReactNode } from 'react'
import { cn } from '../../../../../../utils/cn'

interface MethodProps {
  title: string;
  icon: ReactNode;
  isSelected: boolean;
}

export function Method({ title, icon, isSelected }: MethodProps) {
  return (
    <div
      className={cn(
        'flex flex-1 items-center justify-start gap-3 rounded-md border p-4 transition-colors duration-200 [&_svg]:text-base [&_svg]:text-purple hover:bg-base-hover max-[590px]:w-full',
        isSelected
          ? 'border-purple bg-purple-light'
          : 'border-base-button bg-base-button',
      )}
    >
      {icon}
      <span className="text-xs uppercase text-base-text">{title}</span>
    </div>
  )
}
