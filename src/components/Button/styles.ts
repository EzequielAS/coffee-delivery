import styled, { css } from 'styled-components'
import { TypesButton } from '.'

export interface ButtonStyledProps {
  buttonType: TypesButton;
  hasIconAndLabel: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  transition: background 0.25s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.hasIconAndLabel && '0.25rem'};

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

  ${props => props.buttonType === 'clean' && css`
    background: ${props => props.theme['base-button']};
    font-size: 0.75rem;
    transition: background 0.25s;
    color: ${props => props.theme['base-text']};

    svg {
      color: ${props => props.theme['purple']};
    }

    &:hover {
      background: ${props => props.theme['base-hover']};
    }
  `}

  ${props => props.buttonType === 'default' && css`
    background: ${props => props.theme['yellow']};
    font-size: 0.75rem;
    transition: background 0.25s;
    color: ${props => props.theme['white']};
    width: 100%;
    padding: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.4rem;

    &:hover {
      background: ${props => props.theme['yellow-dark']};
    }
  `}
`