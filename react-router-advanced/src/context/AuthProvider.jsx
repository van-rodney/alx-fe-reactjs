import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const STORAGE_KEY = 'rra_isAuthenticated'

export function AuthProvider({ children }){
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw === 'true'
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, isAuthenticated ? 'true' : 'false') } catch (e) { /* ignore */ }
  }, [isAuthenticated])

  const login = () => setIsAuthenticated(true)
  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}

export default AuthContext
