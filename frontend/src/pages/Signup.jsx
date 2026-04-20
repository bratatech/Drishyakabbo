import React, { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !email || !password) {
      setError('All fields are required')
      return
    }
    const user = { name, email, password }
    localStorage.setItem('drishyakabboUser', JSON.stringify(user))
    navigate('/login')
  }

  return (
    <>
      <PageHeader title="Sign Up" subtitle="Create an admin account to manage photos" />
      <section className="container section">
        <form className="list" onSubmit={handleSubmit}>
          {error && <p style={{ color: '#f87171' }}>{error}</p>}
          <label>
            Name
            <input
              className="input"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              className="input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              className="input"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <button className="btn" type="submit">Sign Up</button>
        </form>
      </section>
    </>
  )
}
