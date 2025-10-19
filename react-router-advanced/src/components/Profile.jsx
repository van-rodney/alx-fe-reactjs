import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Profile(){
  return (
    <div style={{padding:20}}>
      <h1>Profile (Protected)</h1>
      <nav>
        <NavLink to="details" style={({isActive})=>({color:isActive? 'crimson' : undefined, marginRight:8})}>Details</NavLink>
        <NavLink to="settings" style={({isActive})=>({color:isActive? 'crimson' : undefined})}>Settings</NavLink>
      </nav>
      <div style={{marginTop:12}}>
        <Outlet />
      </div>
    </div>
  )
}
