import { Trash } from 'phosphor-react';
import { Button } from '../../../../../../components/Button'
import { SelectQuantity } from '../../../../../../components/SelectQuantity'

import { 
  CoffeeContainer,
  CoffeeInfos,
  CoffeeName,
  CoffeePrice, 
  Controls,
  ImgStyled,
  Wrapper
} from './styles'

interface CoffeeProps {
  image: string;
  name: string;
  price: number;
}

export function Coffee({ 
  image,
  name,
  price
 }: CoffeeProps) {
  const priceFormmated = new Intl.NumberFormat('pt-BR', { 
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2
   }).format(price)

  return (
    <CoffeeContainer>
      <ImgStyled  src={image} alt={name} />

      <Wrapper>
        <CoffeeInfos>
          <CoffeeName>{name}</CoffeeName>
          <CoffeePrice>{priceFormmated}</CoffeePrice>
        </CoffeeInfos>

        <Controls>
          <SelectQuantity
            add={() => {}}
            remove={() => {}}
            quantity={1}
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