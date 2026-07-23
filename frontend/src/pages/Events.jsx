import React from 'react'

export default function Events() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 20px',
      minHeight: '60vh',
    }}>
      <h2 style={{
        marginBottom: '32px',
        fontSize: '2rem',
        fontWeight: '700',
        letterSpacing: '0.02em',
      }}>
        Upcoming Event
      </h2>
      <img
        src="/img25.jpeg"
        alt="Upcoming Event"
        style={{
          width: '100%',
          maxWidth: '900px',
          borderRadius: '14px',
          boxShadow: '0 6px 32px rgba(0,0,0,0.22)',
          display: 'block',
        }}
      />
    </section>
  )
}
