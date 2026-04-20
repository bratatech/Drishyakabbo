import React from 'react'
import PageHeader from '../components/PageHeader.jsx'
import events from '../data/events.js'

export default function Events() {
  return (
    <>
      <PageHeader title="Events" subtitle="Upcoming shows & workshops" />
      <section className="container grid">
        {events.map(ev => (
          <div className="card" key={ev.id}>
            <img src={ev.image} alt={ev.title} />
            <div className="body">
              <strong>{ev.title}</strong>
              <p>{ev.date} · {ev.venue}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
