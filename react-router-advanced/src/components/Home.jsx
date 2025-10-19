import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(){
  const nav = useNavigate()
  return (
    <div style={{padding:20}}>
      <h1>Home</h1>
      <p>Public landing page. Click to simulate login for protected pages.</p>
      <button onClick={()=>{
        // toggle fake auth and navigate to profile
        // we access the fakeAuth via window for demo
        window.fakeAuth = window.fakeAuth || { isAuthenticated:false }
        window.fakeAuth.isAuthenticated = true
        nav('/profile')
      }}>Simulate Login & Go to Profile</button>
    </div>
  )
}
