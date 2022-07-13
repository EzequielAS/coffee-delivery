import styled, { css } from 'styled-components'
import { TypesButton } from '.'

export interface ButtonStyledProps {
  buttonType: TypesButton;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  transition: background 0.25s;

  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.buttonType === 'cart' && css`
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
  `}

  ${props => props.buttonType === 'buy' && css`
    background: ${props => props.theme['purple-dark']};
    color: ${props => props.theme['base-card']};

    &:hover {
      background: ${props => props.theme['purple']};
    }
  `}
`