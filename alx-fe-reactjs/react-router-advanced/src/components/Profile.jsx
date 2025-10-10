import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

function ProfileDetails(){
  return <div><h3>Details</h3><p>User details here.</p></div>
}
function ProfileSettings(){
  return <div><h3>Settings</h3><p>User settings here.</p></div>
}

export default function Profile(){
  return (
    <div style={{padding:20}}>
      <h1>Profile (Protected)</h1>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails/>} />
        <Route path="settings" element={<ProfileSettings/>} />
        <Route index element={<ProfileDetails/>} />
      </Routes>
    </div>
  )
}
