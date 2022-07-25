import styled from 'styled-components'

export const CircleContainer = styled.div<{
  bgColor: string;
}>`
  padding: 0.5rem;
  border-radius: 50%;
  background: ${props => props.bgColor};
  color: ${props => props.theme['background']};

  display: flex;
  align-items: center;
`