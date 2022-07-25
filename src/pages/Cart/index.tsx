import { DeliveryAddress } from './components/DeliveryAddress'
import { CoffeesSelected } from './components/CoffeesSelected'
import { PaymentMethod } from './components/PaymentMethod'

import { 
  CartContainer, 
  OrderAdditionalInfo,
  OrderDetails, 
  Title
} from './styles'

export function Cart() {
  return (
    <CartContainer>
      <OrderAdditionalInfo>
        <Title>Complete seu pedido</Title>
        <DeliveryAddress />
        <PaymentMethod />
      </OrderAdditionalInfo>

      <OrderDetails>
        <Title>Cafés selecionados</Title>
        <CoffeesSelected />
      </OrderDetails>
    </CartContainer>
  )
}