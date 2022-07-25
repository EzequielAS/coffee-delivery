import styled from 'styled-components'

export const FormContainer = styled.div`
  background: ${props => props.theme['base-card']};
  margin-top: 0.9rem;
  border-radius: 6px;
  padding: 2.5rem;
`

export const Header = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme['yellow-dark']}
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

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MultiInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
