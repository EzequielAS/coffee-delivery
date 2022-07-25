import { Trash } from 'phosphor-react'
import { Button } from '../../../../../../components/Button'
import { SelectQuantity } from '../../../../../../components/SelectQuantity'
import { useOrderContext } from '../../../../../../contexts/OrderContext'
import { ICoffee } from '../../../../../../@types/coffee'

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
  const { handleAddNewProduct } = useOrderContext()

  const priceFormmated = new Intl.NumberFormat('pt-BR', { 
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2
   }).format(price)

  function addCoffee() {
    const product = {
      id,
      image,
      name, 
      price,
      quantity: 1
    }

    handleAddNewProduct(product)
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
            add={addCoffee}
            remove={() => {}}
            quantity={quantity}
          />

          <Button
            icon={<Trash size={16} />}
            label="REMOVER"
            buttonType='clean'
          />
        </Controls>
      </Wrapper>
    </CoffeeContainer>
  )
}