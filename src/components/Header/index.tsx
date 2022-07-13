import { Logo } from '../Logo'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'

import { 
  HeaderStyled, 
  HeaderContent,
  CartAndAddressContainer,
  AddressTag, 
  AddressText,
} from './styles'
import { Link } from 'react-router-dom'

export function Header() {
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
            <Button 
              icon={
                <ShoppingCart 
                  weight='fill' 
                  size={22} 
                />
              } 
              buttonType="cart"
            />
          </Link>
        </CartAndAddressContainer>
      </HeaderContent>
    </HeaderStyled>
  )
}