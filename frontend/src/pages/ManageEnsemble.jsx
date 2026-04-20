import React, { useState, useEffect } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { useNavigate } from 'react-router-dom'

function isLoggedIn() {
  return localStorage.getItem('drishyakabboLoggedIn') === 'true'
}

export default function ManageEnsemble() {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [bio, setBio] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [items, setItems] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login')
      return
    }
    const stored = localStorage.getItem('drishyakabboEnsembleExtra')
    if (stored) {
      setItems(JSON.parse(stored))
    }
  }, [navigate])

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !role || !imageUrl) {
      setError('Name, role and image URL are required')
      setSuccess('')
      return
    }
    const newItem = {
      id: 'extra-' + Date.now(),
      name,
      role,
      image: imageUrl,
      bio,
    }
    const next = [...items, newItem]
    setItems(next)
    localStorage.setItem('drishyakabboEnsembleExtra', JSON.stringify(next))
    setName('')
    setRole('')
    setImageUrl('')
    setBio('')
    setError('')
    setSuccess('Added ensemble member')
  }

  return (
    <>
      <PageHeader title="Manage Ensemble" subtitle="Add ensemble members (admin only)" />
      <section className="container section">
        <form className="list" onSubmit={handleSubmit}>
          {error && <p style={{ color: '#f87171' }}>{error}</p>}
          {success && <p style={{ color: '#4ade80' }}>{success}</p>}
          <label>
            Name
            <input
              className="input"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            Role
            <input
              className="input"
              value={role}
              onChange={e => setRole(e.target.value)}
              placeholder="Actor, Director, Music, Lights..."
            />
          </label>
          <label>
            Image URL
            <input
              className="input"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              placeholder="https:// or /public/path.jpg"
            />
          </label>
          <label>
            Bio / Notes (optional)
            <textarea
              className="input"
              rows={3}
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </label>
          <button className="btn" type="submit">Add Member</button>
        </form>

        {items.length > 0 && (
          <div style={{ marginTop: 24 }}>
            <h3>Current added members</h3>
            <div className="grid">
              {items.map(m => (
                <div className="card" key={m.id}>
                  <img src={m.image} alt={m.name} />
                  <div className="body">
                    <strong>{m.name}</strong>
                    <p>{m.role}</p>
                    {m.bio && <p style={{ fontSize: 13 }}>{m.bio}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}
