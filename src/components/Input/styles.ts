import styled from 'styled-components'

interface FormContainerProps {
  width?: string;
  isFocused: boolean;
}

export const InputContainer = styled.div<FormContainerProps>`
  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.isFocused 
    ? props.theme['yellow-dark'] 
    : props.theme['base-button']
  };
  width: ${props => props.width};
  border-radius: 4px;
  padding: 0.75rem;
  cursor: text;
  transition: border 0.2s ease-in-out;

  display: flex;
  align-items: center;
`

export const InputStyled = styled.input`
  background: transparent;
  border: none;
  height: 100%;
  font-size: 0.875rem;
  color: ${props => props.theme['base-text']};

  flex: 1;

  ::placeholder {
    color: ${props => props.theme['base-label']};
  }
`

export const Text = styled.span`
  font-style: italic;
  font-size: 0.75rem;
  color: ${props => props.theme['base-label']};
  margin-left: 0.3rem;
`