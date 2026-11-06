import { Logo } from '../Logo'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Button } from '../Button'
import { Link } from '@tanstack/react-router'
import { useOrderContext } from '../../contexts/OrderContext'

export function Header() {
  const { products } = useOrderContext()

  const totalProductsAddedToCart = products.reduce((prev, current) => {
    return prev + current.quantity
  }, 0)

  return (
    <header className="sticky top-0 bg-background py-8">
      <div className="mx-auto flex w-[97%] max-w-[70rem] items-center justify-between">
        <Logo />

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-md bg-purple-light p-2 text-sm text-purple-dark [&_svg]:text-purple">
            <MapPin weight='fill' size={22} />
            <span>Aracaju, SE</span>
          </div>

          <Link to="/cart">
            <div className="relative">
              <span className="absolute -right-[20%] -top-[20%] flex h-5 w-5 items-center justify-center rounded-full bg-yellow-dark text-xs font-bold text-white">
                {totalProductsAddedToCart}
              </span>
              <Button
                icon={
                  <ShoppingCart
                    weight='fill'
                    size={22}
                  />
                }
                buttonType="cart"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
