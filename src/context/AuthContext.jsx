import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = async (email, _password) => {
    if (email && _password) {
      setUser({ email, name: email.split('@')[0] })
      return true
    }
    return false
  }

  const register = async (name, email, _password) => {
    if (name && email && _password) {
      setUser({ email, name })
      return true
    }
    return false
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
