import React from 'react'
import PageHeader from '../components/PageHeader.jsx'

export default function Tickets() {
  return (
    <>
      <PageHeader title="Tickets" subtitle="Reserve seats for a show" />
      <section className="container">
        <p>Ticket booking will open soon. For now, please <a href="mailto:hello@drishyakabbo.org">email us</a>.</p>
      </section>
    </>
  )
}
