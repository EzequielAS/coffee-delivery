import { coffeesDatas } from '../../../../coffeesDatas'
import { Button } from '../../../../components/Button'
import { Coffee } from './components/Coffee'

import { 
  CoffeesContainer,
  PriceDetails,
  SpanStyled,
  PriceWrapper 
} from './styles'

export function CoffeesSelected() {
  const coffees = coffeesDatas.slice(1, 3)

  return (
    <CoffeesContainer>
      {coffees.map(coffee => (
        <Coffee
          key={coffee.id}
          image={coffee.image}
          name={coffee.name}
          price={coffee.price}
        />
      ))}

      <PriceWrapper>
        <PriceDetails>
          <SpanStyled>Total de itens</SpanStyled>
          <SpanStyled>R$ 29,79</SpanStyled>
        </PriceDetails>

        <PriceDetails>
          <SpanStyled>Entrega</SpanStyled>
          <SpanStyled>R$ 3,50</SpanStyled>
        </PriceDetails>

        <PriceDetails isTotal>
          <SpanStyled>Total</SpanStyled>
          <SpanStyled>R$ 33,20</SpanStyled>
        </PriceDetails>
      </PriceWrapper>

      <Button 
        label='CONFIRMAR PEDIDO'
        buttonType='default'
      />
    </CoffeesContainer>
  )
}