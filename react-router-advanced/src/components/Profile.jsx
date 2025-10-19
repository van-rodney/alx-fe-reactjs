import React from 'react'
import { NavLink, Outlet, Routes, Route } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'

export default function Profile(){
  return (
    <div style={{padding:20}}>
      <h1>Profile (Protected)</h1>
      <nav>
        <NavLink to="details" style={({isActive})=>({color:isActive? 'crimson' : undefined, marginRight:8})}>Details</NavLink>
        <NavLink to="settings" style={({isActive})=>({color:isActive? 'crimson' : undefined})}>Settings</NavLink>
      </nav>
      <div style={{marginTop:12}}>
        <Routes>
          <Route index element={<ProfileDetails/>} />
          <Route path="details" element={<ProfileDetails/>} />
          <Route path="settings" element={<ProfileSettings/>} />
        </Routes>
        <Outlet />
      </div>
    </div>
  )
}
