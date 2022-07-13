import { useState } from 'react'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { Button } from '../../../../../../components/Button'

import { Controls, SelectQuantity, SpanStyled } from './styles'

export function CardControls() {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  function handleAddCoffee() {
    setCoffeeQuantity(state => state + 1)
  }

  function handleRemoveCoffee() {
    if (coffeeQuantity === 1) return 

    setCoffeeQuantity(state => state - 1)
  }

  return (
    <Controls>
       <SelectQuantity>
          <Minus 
            weight='fill' 
            size={14} 
            onClick={handleRemoveCoffee}
            type="button"
          />

          <SpanStyled>
            {coffeeQuantity}
          </SpanStyled>

          <Plus 
            weight='fill' 
            size={14} 
            onClick={handleAddCoffee}
            type="button"
          />
       </SelectQuantity>

        <Button 
          buttonType='buy'
          icon={<ShoppingCartSimple weight='fill' size={22} />}
        />
    </Controls>
  )
}