import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate, Outlet } from 'react-router-dom'
import Profile from './components/Profile'
import Home from './components/Home'
import Post from './components/Post'

// simple auth simulation
const fakeAuth = { isAuthenticated: false }
function ProtectedRoute({ children }){
  return fakeAuth.isAuthenticated ? children : <Navigate to="/" replace />
}

export default function App(){
  return (
    <BrowserRouter>
      <nav style={{padding:10}}>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/post/42">Post 42</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile/*" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
        <Route path="/post/:id" element={<Post/>} />
      </Routes>
    </BrowserRouter>
  )
}
