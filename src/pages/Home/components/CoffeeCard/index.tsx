import { CardControls } from './components/CardControls'

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
  PriceValue
} from './styles'

interface CoffeeCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export function CoffeeCard({ image, description, name, price, tags }: CoffeeCardProps) {
  const priceFormatted = new Intl.NumberFormat('pt-BR', { 
     minimumFractionDigits: 2
    }).format(price)

  return (
    <CardContainer>
      <ImgStyled src={image} alt='' />

      <ChipsContainer>
        {tags.map(tag => (
          <Chip>
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
        
        <CardControls />
      </PriceContainer>
    </CardContainer>
  )
}