import { ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '../../../../components/Button'
import { SelectQuantity } from '../../../../components/SelectQuantity'
import { useOrderContext } from '../../../../contexts/OrderContext'

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
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export function CoffeeCard({ 
  id,
  image, 
  description, 
  name, 
  price, 
  tags 
}: CoffeeCardProps) {
  const { handleAddNewProduct } = useOrderContext()

  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  const priceFormatted = new Intl.NumberFormat('pt-BR', { 
    minimumFractionDigits: 2
  }).format(price)

  function handleAddCoffeeQuantity() {
    setCoffeeQuantity(state => state + 1)
  }

  function handleRemoveCoffeeQuantity() {
    if (coffeeQuantity === 1) return

    setCoffeeQuantity(state => state - 1)
  }

  function addCoffeeToCart() {
    const product = {
      id,
      image,
      name,
      price,
      quantity: coffeeQuantity
    }

    handleAddNewProduct(product)
    setCoffeeQuantity(1)
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
            add={handleAddCoffeeQuantity}
            remove={handleRemoveCoffeeQuantity}
            quantity={coffeeQuantity}
          />
          <Button
            buttonType='buy'
            icon={<ShoppingCartSimple weight='fill' size={22} />}
            onClick={addCoffeeToCart}
          />
        </Controls>
      </PriceContainer>
    </CardContainer>
  )
}