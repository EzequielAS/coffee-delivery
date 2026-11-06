import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ChatAssistant } from '../components/ChatAssistant'
import { Header } from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <ChatAssistant />
    </>
  ),
})
