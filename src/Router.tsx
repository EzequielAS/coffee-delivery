import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Order } from './pages/Order'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Route>
    </Routes>
  )
}