import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { OrderProvider } from './contexts/OrderContext'
import { router } from './main/router'
import './index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Elemento #root não encontrado em index.html.')

createRoot(rootElement).render(
  <StrictMode>
    <OrderProvider>
      <RouterProvider router={router} />
    </OrderProvider>
  </StrictMode>,
)
