import { Minus, Plus } from '@phosphor-icons/react'

interface SelectQuantityProps {
  add: () => void;
  remove: () => void;
  quantity: number;
}

export function SelectQuantity({ add, remove, quantity }: SelectQuantityProps) {
  return (
    <div className="flex items-center gap-1 rounded-md bg-base-button p-2">
      <Minus
        weight='fill'
        size={14}
        onClick={remove}
        className="cursor-pointer text-purple transition-colors duration-250 hover:text-purple-dark"
      />

      <span className="w-5 select-none text-center leading-5 text-base-title">
        {quantity}
      </span>

      <Plus
        weight='fill'
        size={14}
        onClick={add}
        className="cursor-pointer text-purple transition-colors duration-250 hover:text-purple-dark"
      />
    </div>
  )
}
