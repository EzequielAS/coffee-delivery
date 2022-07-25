import styled from 'styled-components'

export const CartContainer = styled.section`
  max-width: 70rem;
  width: 97%;
  margin: 2.5rem auto;

  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;

  @media (max-width: 1140px) {
    grid-template-columns: 1fr;
    overflow: hidden;
  }
`

export const OrderAdditionalInfo = styled.div``


export const OrderDetails = styled.div``


export const Title = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.4rem;
  color: ${props => props.theme['base-subtitle']};
`