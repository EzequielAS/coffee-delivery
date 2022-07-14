import styled from 'styled-components'

export const SelectContainer = styled.div`
  background: ${props => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;

  svg {
    color: ${props => props.theme['purple']};
    cursor: pointer;
    transition: color 0.25s;

    &:hover {
      color: ${props => props.theme['purple-dark']};
    }
  }

  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const SpanStyled = styled.span`
  color: ${props => props.theme['base-title']};
  line-height: 1.25rem;
  width: 1.25rem;
  text-align: center;
`