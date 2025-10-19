import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Profile(){
  return (
    <div style={{padding:20}}>
      <h1>Profile (Protected)</h1>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <div style={{marginTop:12}}>
        <Outlet />
      </div>
    </div>
  )
}
