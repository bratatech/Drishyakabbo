import React from 'react'
import PageHeader from '../components/PageHeader.jsx'
import productions from '../data/productions.js'

export default function Productions() {
  return (
    <>
      <PageHeader title="Productions" subtitle="Current and past productions" />
      <section className="container grid">
        {productions.map(p => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.title} />
            <div className="body">
              <strong>{p.title}</strong>
              <p>{p.tagline}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
