import styled from 'styled-components'

export const HeaderStyled = styled.header`
  padding: 2rem 0;
  background: ${props => props.theme.background};

  position: sticky;
  top: 0;
`

export const HeaderContent = styled.div`
  max-width: 70rem;
  width: 97%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CartAndAddressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const AddressTag = styled.div`
  background: ${props => props.theme['purple-light']};
  border-radius: 6px;
  color: ${props => props.theme['purple-dark']};
  padding: 0.5rem;
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: ${props => props.theme['purple']};
  }
`

export const AddressText = styled.span``