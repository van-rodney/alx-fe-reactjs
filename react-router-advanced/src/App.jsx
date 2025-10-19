import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom'
import Profile from './components/Profile'
import Home from './components/Home'
import Post from './components/Post'
import { AuthProvider, useAuth } from './context/AuthProvider'

function ProtectedRoute({ children }){
  const auth = useAuth()
  return auth?.isAuthenticated ? children : <Navigate to="/" replace />
}

function Nav(){
  const auth = useAuth()
  const nav = useNavigate()
  return (
    <nav style={{padding:10}}>
      <NavLink to="/" style={({isActive})=>({marginRight:8, color:isActive? 'crimson' : undefined})}>Home</NavLink>
      <NavLink to="/profile" style={({isActive})=>({marginRight:8, color:isActive? 'crimson' : undefined})}>Profile</NavLink>
      <NavLink to="/post/42" style={({isActive})=>({marginRight:8, color:isActive? 'crimson' : undefined})}>Post 42</NavLink>
      {auth?.isAuthenticated ? (
        <button onClick={()=>{ auth.logout(); nav('/') }} style={{marginLeft:12}}>Logout</button>
      ) : null}
    </nav>
  )
}

function NotFound(){
  return (
    <div style={{padding:20}}>
      <h1>404 — Not Found</h1>
      <p>The page you requested does not exist.</p>
    </div>
  )
}

export default function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile/*" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
