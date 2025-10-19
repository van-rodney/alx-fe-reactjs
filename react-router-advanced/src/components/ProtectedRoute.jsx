import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function ProtectedRoute({ children }){
  const auth = useAuth()
  return auth?.isAuthenticated ? children : <Navigate to="/" replace />
}
