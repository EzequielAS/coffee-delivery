import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { ThemeProvider } from 'styled-components'
import { OrderProvider } from './contexts/OrderContext'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <OrderProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </OrderProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
