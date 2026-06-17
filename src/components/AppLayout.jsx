import { Outlet, Navigate } from 'react-router-dom'
import Header from './Header.jsx'
import { useUser } from '../context/UserContext.jsx'

// Layout for the internal screens (SPA): keeps the menu fixed at the top and
// swaps only the content (Outlet) when navigating, without reloading the page.
// If there is no logged-in user in the context, redirects to the login.
function AppLayout() {
  const { user } = useUser()

  if (!user) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="dashboard">
      <Header />
      <main className="dashboard__container">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
