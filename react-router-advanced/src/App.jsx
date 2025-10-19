import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import Home from './components/Home'
import Post from './components/Post'
import { AuthProvider, useAuth } from './context/AuthProvider'

function ProtectedRoute({ children }){
  const auth = useAuth()
  return auth?.isAuthenticated ? children : <Navigate to="/" replace />
}

export default function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <nav style={{padding:10}}>
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/post/42">Post 42</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}>
            <Route index element={<ProfileDetails/>} />
            <Route path="details" element={<ProfileDetails/>} />
            <Route path="settings" element={<ProfileSettings/>} />
          </Route>
          <Route path="/post/:id" element={<Post/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
