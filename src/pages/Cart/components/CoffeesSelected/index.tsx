import { Button } from '../../../../components/Button'
import { useOrderContext } from '../../../../contexts/OrderContext'
import { formatPrice } from '../../../../utils/formatPrice'
import { Coffee } from './components/Coffee'

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
    <div className="mt-[0.9rem] rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] bg-base-card p-10">
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

      <div className="my-6 flex flex-col items-center gap-3">
        <div className="flex w-full items-center justify-between text-base font-normal text-base-text">
          <span>Total de itens</span>
          <span>{totalItensPriceFormatted}</span>
        </div>

        <div className="flex w-full items-center justify-between text-base font-normal text-base-text">
          <span>Entrega</span>
          <span>{deliveryFormatted}</span>
        </div>

        <div className="flex w-full items-center justify-between text-xl font-bold text-base-subtitle">
          <span>Total</span>
          <span>{totalPriceFormatted}</span>
        </div>
      </div>

      <Button
        label='CONFIRMAR PEDIDO'
        buttonType='default'
        type='submit'
      />
    </div>
  )
}
