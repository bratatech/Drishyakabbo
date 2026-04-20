import React from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" />
      <section className="container">
        <p>The page you are looking for does not exist.</p>
        <div className="cta-row">
          <Link className="btn" to="/">Back to Home</Link>
        </div>
      </section>
    </>
  )
}
