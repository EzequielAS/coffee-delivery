import { Trash } from '@phosphor-icons/react'
import { Button } from '../../../../../../components/Button'
import { SelectQuantity } from '../../../../../../components/SelectQuantity'
import { useOrderContext } from '../../../../../../contexts/OrderContext'
import { ICoffee } from '../../../../../../@types/coffee'
import { formatPrice } from '../../../../../../utils/formatPrice'

export function Coffee({
  id,
  image,
  name,
  price,
  quantity
 }: ICoffee) {
  const {
    handleIncrementProduct,
    handleRemoveProduct,
    handleDecrementProduct
  } = useOrderContext()

  const priceFormmated = formatPrice(price)

  function incrementCoffee() {
    handleIncrementProduct(id)
  }

  function decrementCoffee() {
    if (quantity === 1) return

    handleDecrementProduct(id)
  }

  function removeCoffee() {
    handleRemoveProduct(id)
  }

  return (
    <div className="flex items-center gap-5 border-b border-base-button pb-6 [&+&]:mt-6">
      <img src={image} alt={name} className="h-16" />

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="text-base-subtitle">{name}</span>
          <span className="font-bold leading-5 text-base-text">
            {priceFormmated}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <SelectQuantity
            add={incrementCoffee}
            remove={decrementCoffee}
            quantity={quantity}
          />

          <Button
            icon={<Trash size={16} />}
            label="REMOVER"
            buttonType='clean'
            onClick={removeCoffee}
          />
        </div>
      </div>
    </div>
  )
}
