import { Trash } from 'phosphor-react'
import { Button } from '../../../../../../components/Button'
import { SelectQuantity } from '../../../../../../components/SelectQuantity'
import { useOrderContext } from '../../../../../../contexts/OrderContext'
import { ICoffee } from '../../../../../../@types/coffee'
import { formatPrice } from '../../../../../../utils/formatPrice'

import { 
  CoffeeContainer,
  CoffeeInfos,
  CoffeeName,
  CoffeePrice, 
  Controls,
  ImgStyled,
  Wrapper
} from './styles'

export function Coffee({ 
  id,
  image,
  name,
  price,
  quantity
 }: ICoffee) {
  const { 
    handleIncrementProduct, 
    handleRemoveProduct,
    handleDecrementProduct 
  } = useOrderContext()

  const priceFormmated = formatPrice(price)

  function incrementCoffee() {
    handleIncrementProduct(id)
  }

  function decrementCoffee() {
    if (quantity === 1) return

    handleDecrementProduct(id)
  }

  function removeCoffee() {
    handleRemoveProduct(id)
  }

  return (
    <CoffeeContainer>
      <ImgStyled src={image} alt={name} />

      <Wrapper>
        <CoffeeInfos>
          <CoffeeName>{name}</CoffeeName>
          <CoffeePrice>
            {priceFormmated}
          </CoffeePrice>
        </CoffeeInfos>

        <Controls>
          <SelectQuantity
            add={incrementCoffee}
            remove={decrementCoffee}
            quantity={quantity}
          />

          <Button
            icon={<Trash size={16} />}
            label="REMOVER"
            buttonType='clean'
            onClick={removeCoffee}
          />
        </Controls>
      </Wrapper>
    </CoffeeContainer>
  )
}