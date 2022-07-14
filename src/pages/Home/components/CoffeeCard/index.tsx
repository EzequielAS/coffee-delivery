import { ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '../../../../components/Button'
import { SelectQuantity } from '../../../../components/SelectQuantity'

import { 
  CardContainer, 
  ImgStyled, 
  ChipsContainer, 
  Chip,
  TextContainer,
  Title,
  Description,
  PriceContainer,
  Price,
  Currency,
  PriceValue,
  Controls
} from './styles'

interface CoffeeCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export function CoffeeCard({ 
  image, 
  description, 
  name, 
  price, 
  tags 
}: CoffeeCardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  const priceFormatted = new Intl.NumberFormat('pt-BR', { 
     minimumFractionDigits: 2
    }).format(price)

  function handleAddCoffee() {
    setCoffeeQuantity(state => state + 1)
  }

  function handleRemoveCoffee() {
    if (coffeeQuantity === 1) return

    setCoffeeQuantity(state => state - 1)
  }

  return (
    <CardContainer>
      <ImgStyled src={image} alt={name} />

      <ChipsContainer>
        {tags.map(tag => (
          <Chip key={tag}>
            {tag}
          </Chip>
        ))}
      </ChipsContainer>

      <TextContainer>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </TextContainer>

      <PriceContainer>
        <Price>
          <Currency>R$</Currency>
          <PriceValue>{priceFormatted}</PriceValue>
        </Price>
        
        <Controls>
          <SelectQuantity 
            add={handleAddCoffee}
            remove={handleRemoveCoffee}
            quantity={coffeeQuantity}
          />
          <Button
            buttonType='buy'
            icon={<ShoppingCartSimple weight='fill' size={22} />}
          />
        </Controls>
      </PriceContainer>
    </CardContainer>
  )
}