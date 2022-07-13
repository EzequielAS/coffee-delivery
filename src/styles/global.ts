import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
  }

  html {
      text-rendering: optimizeLegibility;

      @media (max-width: 1080px){
        font-size: 93.75%;
      }

      @media (max-width: 720px){
        font-size: 87.5%;  
      }
  }

  body {
    background: ${({ theme }) => theme['background']};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  } 

  button {
    cursor: pointer;
  }
`