import { Logo } from '../Logo'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import { useOrderContext } from '../../contexts/OrderContext'

import { 
  HeaderStyled, 
  HeaderContent,
  CartAndAddressContainer,
  AddressTag, 
  AddressText,
  CartButtonWrapper,
  CoffeeQuantity
} from './styles'

export function Header() {
  const { totalProductsAddedToCart } = useOrderContext()

  return (
    <HeaderStyled>
      <HeaderContent>
        <Logo />
        
        <CartAndAddressContainer>
          <AddressTag>
            <MapPin weight='fill' size={22} />
            <AddressText>Aracaju, SE</AddressText>
          </AddressTag>

          <Link to="/cart">
            <CartButtonWrapper>
              <CoffeeQuantity>
                {totalProductsAddedToCart}
              </CoffeeQuantity>
              <Button 
                icon={
                  <ShoppingCart 
                    weight='fill' 
                    size={22} 
                  />
                } 
                buttonType="cart"
              />
            </CartButtonWrapper>
          </Link>
        </CartAndAddressContainer>
      </HeaderContent>
    </HeaderStyled>
  )
}