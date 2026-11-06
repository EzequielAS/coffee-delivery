import { DeliveryAddress } from './components/DeliveryAddress'
import { CoffeesSelected } from './components/CoffeesSelected'
import { PaymentMethod } from './components/PaymentMethod'
import { useForm, FormProvider  } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import * as zod from 'zod'

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
    navigate({ to: '/order' })
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitOrderForm)}
      className="mx-auto my-10 grid w-[97%] max-w-[70rem] grid-cols-[1fr_28rem] gap-8 max-[1140px]:grid-cols-1 max-[1140px]:overflow-hidden"
    >
      <FormProvider {...orderForm}>
        <div>
          <span className="font-title text-lg font-bold leading-[1.4rem] text-base-subtitle">Complete seu pedido</span>
          <DeliveryAddress />
          <PaymentMethod />
        </div>

        <div>
          <span className="font-title text-lg font-bold leading-[1.4rem] text-base-subtitle">Cafés selecionados</span>
          <CoffeesSelected />
        </div>
      </FormProvider>
    </form>
  )
}