import { ShoppingCartSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { Button } from '../../../../components/Button'
import { SelectQuantity } from '../../../../components/SelectQuantity'
import { useOrderContext } from '../../../../contexts/OrderContext'

interface CoffeeCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export function CoffeeCard({
  id,
  image,
  description,
  name,
  price,
  tags
}: CoffeeCardProps) {
  const { handleAddNewProduct } = useOrderContext()

  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2
  }).format(price)

  function handleAddCoffeeQuantity() {
    setCoffeeQuantity(state => state + 1)
  }

  function handleRemoveCoffeeQuantity() {
    if (coffeeQuantity === 1) return

    setCoffeeQuantity(state => state - 1)
  }

  function addCoffeeToCart() {
    const product = {
      id,
      image,
      name,
      price,
      quantity: coffeeQuantity
    }

    handleAddNewProduct(product)
    setCoffeeQuantity(1)
  }

  return (
    <div className="flex flex-col items-center rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] bg-base-card px-6 py-5">
      <img src={image} alt={name} className="mt-[-2.7rem] h-30 select-none" />

      <div className="mt-3 flex items-center justify-center gap-1">
        {tags.map(tag => (
          <div
            key={tag}
            className="select-none rounded-full bg-yellow-light px-2 py-1 text-[0.625rem] font-bold leading-[0.8125rem] text-yellow-dark"
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <strong className="font-title text-xl font-extrabold leading-[1.625rem] text-base-subtitle">{name}</strong>
        <span className="mt-2 block text-sm leading-[1.125rem] text-base-label">{description}</span>
      </div>

      <div className="mt-8 flex w-full items-center justify-between">
        <div className="flex select-none items-end gap-1">
          <span className="text-sm text-base-text">R$</span>
          <b className="font-title text-2xl font-extrabold leading-[1.125rem] text-base-text">{priceFormatted}</b>
        </div>

        <div className="flex items-center justify-center gap-2">
          <SelectQuantity
            add={handleAddCoffeeQuantity}
            remove={handleRemoveCoffeeQuantity}
            quantity={coffeeQuantity}
          />
          <Button
            buttonType='buy'
            icon={<ShoppingCartSimple weight='fill' size={22} />}
            onClick={addCoffeeToCart}
          />
        </div>
      </div>
    </div>
  )
}
