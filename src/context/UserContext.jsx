import { createContext, useContext, useState } from 'react'

// Context API: shares the logged-in user's data across screens
// (Dashboard, Profile and the Header menu) without prop drilling.
const UserContext = createContext(null)

// Default user shown after login (equivalent to "João" in the original app).
const initialUser = {
  name: 'João Silva',
  preferredName: 'Jonh',
  email: 'joao.silva@satc.edu.br',
  course: 'Engenharia de Software',
  year: '3º Ano',
  cpf: '***.***.***-89',
  phone: '',
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  // Called on the Login screen: stores the user data in the global state.
  function login(data) {
    setUser({ ...initialUser, ...data })
  }

  function logout() {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

// Helper hook to consume the context easily in the screens.
export function useUser() {
  const context = useContext(UserContext)
  if (context === null) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
