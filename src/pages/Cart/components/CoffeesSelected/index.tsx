import { Button } from '../../../../components/Button'
import { useOrderContext } from '../../../../contexts/OrderContext'
import { Coffee } from './components/Coffee'

import { 
  CoffeesContainer,
  PriceDetails,
  SpanStyled,
  PriceWrapper 
} from './styles'

export function CoffeesSelected() {
  const { products } = useOrderContext()

  return (
    <CoffeesContainer>
      {products.map(coffee => (
        <Coffee
          key={coffee.id}
          id={coffee.id}
          image={coffee.image}
          name={coffee.name}
          price={coffee.price}
          quantity={coffee.quantity}
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