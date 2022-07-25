import { 
  Bank, CreditCard, 
  CurrencyDollar, Money 
} from 'phosphor-react'
import { Method } from './components/Method'

import { 
  PaymentContainer, 
  Header, 
  TitleWrapper,
  Title,
  Subtitle,
  MethodsWrapper 
} from './styles'

export function PaymentMethod() {
  return (
    <PaymentContainer>
      <Header>
        <CurrencyDollar size={22} />

        <TitleWrapper>
          <Title>Pagamento</Title>
          <Subtitle>
            O pagamento é feito na entrega.{' '} 
            Escolha a forma que deseja pagar
          </Subtitle>
        </TitleWrapper>
      </Header>

      <MethodsWrapper>
        <Method 
          title="Cartão de Crédito"
          icon={<CreditCard />}
          isSelected={false}
        />
        <Method 
         title="Cartão de Débito"
         icon={<Bank />}
         isSelected={false}
        />
        <Method 
          title="Dinheiro"
          icon={<Money />}
          isSelected
        />
      </MethodsWrapper>
    </PaymentContainer>
  )
}