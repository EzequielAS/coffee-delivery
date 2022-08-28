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
  cursor: text;
  transition: border 0.2s ease-in-out;
  position: relative;

  display: flex;
  align-items: center;
`

export const InputStyled = styled.input`
  background: transparent;
  padding: 0.75rem;
  border: none;
  height: 100%;
  overflow: hidden;
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
  margin: 0 0.3rem;
`

export const ErrorInput = styled.span`
  color: red;
  position: absolute;
  bottom: -3px;
  width: 100%;
  transform: translateY(100%);
  font-size: 0.65rem;
`