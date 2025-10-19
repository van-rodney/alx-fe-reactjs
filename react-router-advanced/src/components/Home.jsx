import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function Home(){
  const nav = useNavigate()
  const auth = useAuth()
  return (
    <div style={{padding:20}}>
      <h1>Home</h1>
      <p>Public landing page. Click to simulate login for protected pages.</p>
      {auth?.isAuthenticated ? (
        <>
          <p>You are logged in.</p>
          <button onClick={() => { auth.logout(); nav('/') }}>Logout</button>
        </>
      ) : (
        <button onClick={()=>{ auth.login(); nav('/profile') }}>Simulate Login & Go to Profile</button>
      )}
    </div>
  )
}
