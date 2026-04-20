import React from 'react'
import Hero from '../components/Hero.jsx'
import ImageScroller from '../components/ImageScroller.jsx'
import { Link } from 'react-router-dom'
import productions from '../data/productions.js'
import events from '../data/events.js'

export default function Home() {
  return (
    <>
      <Hero />
      <ImageScroller />
      <section className="container section">
        <div className="page-header">
          <h2>Latest Productions</h2>
          <p>Our recent stage works</p>
        </div>
        <div className="grid">
          {productions.slice(0, 3).map(p => (
            <div className="card" key={p.id}>
              <img src={p.image} alt={p.title} />
              <div className="body">
                <strong>{p.title}</strong>
                <p>{p.tagline}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cta-row">
          <Link className="btn secondary" to="/productions">All Productions</Link>
        </div>
      </section>

      <section className="container section">
        <div className="page-header">
          <h2>Upcoming Events</h2>
          <p>Showtimes & Workshops</p>
        </div>
        <div className="grid">
          {events.slice(0, 3).map(ev => (
            <div className="card" key={ev.id}>
              <img src={ev.image} alt={ev.title} />
              <div className="body">
                <strong>{ev.title}</strong>
                <p>{ev.date} · {ev.venue}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cta-row">
          <Link className="btn secondary" to="/events">All Events</Link>
        </div>
      </section>
    </>
  )
}
