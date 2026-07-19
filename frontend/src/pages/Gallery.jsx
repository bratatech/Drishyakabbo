import React from 'react'
import PageHeader from '../components/PageHeader.jsx'
import gallery from '../data/gallery.js'

export default function Gallery() {
  return (
    <>
      <PageHeader title="Gallery" subtitle="Glimpses from rehearsals and stage" />
      <section className="container gallery-grid">
        {gallery.map(g => (
          <div className="card" key={g.id}>
            <img src={g.image} alt={g.caption} />
            <div className="body">
              <p>{g.caption}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
