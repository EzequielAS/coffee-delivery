import styled from 'styled-components'

export const PaymentContainer = styled.div`
  background: ${props => props.theme['base-card']};
  border-radius: 6px;
  margin-top: 0.75rem;
  padding: 2.5rem;
`

export const Header = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme['purple']}
  }
`

export const TitleWrapper = styled.div`
`

export const Title = styled.p`
  font-weight: 400;
  line-height: 1.3rem;
  color: ${props => props.theme['base-subtitle']};
`

export const Subtitle = styled.p`
  font-weight: 400;
  color: ${props => props.theme['base-text']};
  font-size: 0.875rem;
  line-height: 1.14rem;
`

export const MethodsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 590px) {
    flex-direction: column;
  }
`