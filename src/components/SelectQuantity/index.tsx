import { Minus, Plus } from 'phosphor-react'

import { 
  SelectContainer, 
  SpanStyled 
} from './style'

interface SelectQuantityProps {
  add: () => void;
  remove: () => void;
  quantity: number;
}

export function SelectQuantity({ add, remove, quantity }: SelectQuantityProps) {
  return (
    <SelectContainer>
      <Minus 
        weight='fill' 
        size={14} 
        onClick={remove}
        type="button"
      />

      <SpanStyled>
        {quantity}
      </SpanStyled>

      <Plus
        weight='fill' 
        size={14} 
        onClick={add}
        type="button"
      />
    </SelectContainer>
  )
}