import styled from 'styled-components'

export const MethodContainer = styled.div<{ 
  isSelected: boolean;
 }>`
  background: ${props => props.isSelected 
    ? props.theme['purple-light'] 
    : props.theme['base-button']
  };
  border: 1px solid ${props => props.isSelected 
    ? props.theme.purple
    : props.theme['base-button']
  };
  border-radius: 6px;
  padding: 1rem;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  flex: 1;

  svg {
    color: ${props => props.theme['purple']};
    font-size: 1rem;
  }

  :hover {
    background: ${props => props.theme['base-hover']};
  }
`

export const Text = styled.span`
  color: ${props => props.theme['base-text']};
  text-transform: uppercase;
  font-size: 0.75rem;
`