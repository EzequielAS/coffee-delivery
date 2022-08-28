import { DeliveryAddress } from './components/DeliveryAddress'
import { CoffeesSelected } from './components/CoffeesSelected'
import { PaymentMethod } from './components/PaymentMethod'
import { useForm, FormProvider  } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import { 
  CartContainer, 
  OrderAdditionalInfo,
  OrderDetails, 
  Title
} from './styles'

const orderFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'coloque um cep válido'),
  street: zod.string().min(1, 'digite a rua'),
  number: zod.string().min(1, 'digite o número'),
  neighborhood: zod.string().min(1, 'digite o bairro'),
  city: zod.string().min(1, 'digite a cidade'),
  complement: zod.string(),
  state: zod.string().max(2, 'digite a sigla').min(1, 'digite a UF')
})

export type OrderFormData = zod.infer<typeof orderFormValidationSchema>

export function Cart() {
  const navigate = useNavigate()

  const orderForm = useForm<OrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: ''
    },
  })

  const { handleSubmit } = orderForm

  function handleSubmitOrderForm(data: OrderFormData) {
    navigate('/order')
    console.log(data)
  }

  return (
    <CartContainer onSubmit={handleSubmit(handleSubmitOrderForm)}>
      <FormProvider {...orderForm}>
        <OrderAdditionalInfo>
          <Title>Complete seu pedido</Title>
          <DeliveryAddress />
          <PaymentMethod />
        </OrderAdditionalInfo>

        <OrderDetails>
          <Title>Cafés selecionados</Title>
          <CoffeesSelected />
        </OrderDetails>
      </FormProvider>
    </CartContainer>
  )
}