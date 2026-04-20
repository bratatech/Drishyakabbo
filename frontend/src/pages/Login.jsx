import React, { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const stored = localStorage.getItem('drishyakabboUser')
    if (!stored) {
      setError('No account found. Please sign up first.')
      return
    }
    const user = JSON.parse(stored)
    if (user.email === email && user.password === password) {
      localStorage.setItem('drishyakabboLoggedIn', 'true')
      navigate('/ensemble')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <>
      <PageHeader title="Login" subtitle="Admin login to add photos" />
      <section className="container section">
        <form className="list" onSubmit={handleSubmit}>
          {error && <p style={{ color: '#f87171' }}>{error}</p>}
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
          <button className="btn" type="submit">Login</button>
        </form>
      </section>
    </>
  )
}
