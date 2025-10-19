import React, { useState } from 'react'

export default function RegistrationForm(){
  const [form, setForm] = useState({ username:'', email:'', password:'' })
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({...prev, [name]: value }))
  }

  function validate(){
    const errs = {}
    if(!form.username.trim()) errs.username = 'Username is required'
    if(!form.email.trim()) errs.email = 'Email is required'
    if(!form.password.trim()) errs.password = 'Password is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e){
    e.preventDefault()
    setMessage('')
    if(!validate()) return
    try{
      await new Promise(res=>setTimeout(res,500))
      setMessage('User registered (mock)')
      setForm({ username:'', email:'', password:'' })
    }catch(err){
      setMessage('Failed to register')
    }
  }

  const { username, email, password } = form

  return (
    <form onSubmit={handleSubmit} style={{maxWidth:400}}>
      <div>
        <label>Username</label>
        <input name="username" value={username} onChange={handleChange} />
        {errors.username && <div className="error">{errors.username}</div>}
      </div>
      <div>
        <label>Email</label>
        <input name="email" value={email} onChange={handleChange} />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handleChange} />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <button type="submit">Register</button>
      {message && <div style={{marginTop:10}}>{message}</div>}
    </form>
  )
}
