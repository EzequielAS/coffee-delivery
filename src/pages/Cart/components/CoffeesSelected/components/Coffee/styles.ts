import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme['base-button']};

  display: flex;
  align-items: center;
  gap: 1.25rem;

  & + & {
    margin-top: 1.5rem;
  }
`

export const ImgStyled = styled.img`
  height: 4rem;
`

export const Wrapper = styled.div`
  flex: 1;
`

export const CoffeeInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CoffeeName = styled.span`
  color: ${props => props.theme['base-subtitle']};
`

export const CoffeePrice = styled.span`
  font-weight: 700;
  line-height: 1.25rem;
  color: ${props => props.theme['base-text']};
`

export const Controls = styled.div`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`