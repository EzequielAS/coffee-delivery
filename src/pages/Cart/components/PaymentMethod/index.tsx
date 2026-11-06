import {
  Bank, CreditCard,
  CurrencyDollar, Money
} from '@phosphor-icons/react'
import { Method } from './components/Method'

export function PaymentMethod() {
  return (
    <div className="mt-3 rounded-md bg-base-card p-10">
      <div className="mb-8 flex items-start gap-2 [&_svg]:text-purple">
        <CurrencyDollar size={22} />

        <div>
          <p className="font-normal leading-[1.3rem] text-base-subtitle">Pagamento</p>
          <p className="text-sm font-normal leading-[1.14rem] text-base-text">
            O pagamento é feito na entrega.{' '}
            Escolha a forma que deseja pagar
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 max-[590px]:flex-col">
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
      </div>
    </div>
  )
}
