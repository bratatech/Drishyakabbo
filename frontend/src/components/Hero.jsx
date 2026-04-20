import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const [bn, setBn] = useState(false)
  return (
    <section className="hero container home-hero">
      <div>
        <div
          className="tag"
          role="button"
          tabIndex={0}
          onClick={() => setBn(v => !v)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setBn(v => !v)}
          title="Toggle Bengali/English"
          aria-pressed={bn}
        >
          {bn ? 'বাংলা থিয়েটার' : 'Bengali Theatre'}
        </div>
        <h1>Drishyakabbo — Stories on Stage</h1>
        <p>
          A vibrant collective for contemporary Bengali theatre — productions, workshops, and performance labs.
        </p>
        <div className="cta-row">
          <Link className="btn" to="/tickets">Book Tickets</Link>
          <Link className="btn secondary" to="/productions">View Productions</Link>
        </div>
      </div>
      <div>
        <img className="card" style={{ width: '100%', height: 320, objectFit: 'cover' }} src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop" alt="Theatre" />
      </div>
    </section>
  )
}
