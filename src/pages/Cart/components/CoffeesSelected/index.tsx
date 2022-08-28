import { Button } from '../../../../components/Button'
import { useOrderContext } from '../../../../contexts/OrderContext'
import { formatPrice } from '../../../../utils/formatPrice'
import { Coffee } from './components/Coffee'

import { 
  CoffeesContainer,
  PriceDetails,
  SpanStyled,
  PriceWrapper 
} from './styles'

export function CoffeesSelected() {
  const { products } = useOrderContext()

  const sumTotalPricesProducts = products.reduce((prev, current) => {
    return prev + (current.price * current.quantity)
  }, 0)
  const delivery = 3.5
  const totalItensPriceFormatted = formatPrice(sumTotalPricesProducts)
  const deliveryFormatted = formatPrice(delivery)
  const totalPriceFormatted = formatPrice(sumTotalPricesProducts + delivery)

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
          <SpanStyled>{totalItensPriceFormatted}</SpanStyled>
        </PriceDetails>

        <PriceDetails>
          <SpanStyled>Entrega</SpanStyled>
          <SpanStyled>{deliveryFormatted}</SpanStyled>
        </PriceDetails>

        <PriceDetails isTotal>
          <SpanStyled>Total</SpanStyled>
          <SpanStyled>{totalPriceFormatted}</SpanStyled>
        </PriceDetails>
      </PriceWrapper>

      <Button 
        label='CONFIRMAR PEDIDO'
        buttonType='default'
        type='submit'
      />
    </CoffeesContainer>
  )
}