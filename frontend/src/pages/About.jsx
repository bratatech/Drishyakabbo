import React from 'react'
import PageHeader from '../components/PageHeader.jsx'

export default function About() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Drishyakabbo — a vibrant collective for Bengali theatre" />
      <section className="container">
        <p>
          We believe theatre is a practice of self-discovery. Our ensemble of young artists from the city and suburbs
          rehearses regularly, hosts workshops, and develops contemporary stage productions with a distinct voice.
        </p>
      </section>
    </>
  )
}
