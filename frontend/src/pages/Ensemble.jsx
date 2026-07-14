import React from 'react'
import PageHeader from '../components/PageHeader.jsx'
import ensemble from '../data/ensemble.js'

function getExtraEnsemble() {
  const stored = localStorage.getItem('drishyakabboEnsembleExtra')
  if (!stored) return []
  try {
    return JSON.parse(stored)
  } catch {
    return []
  }
}

export default function Ensemble() {
  const extra = getExtraEnsemble()
  const all = [...ensemble, ...extra]

  return (
    <>
      <PageHeader title="Ensemble" subtitle="Cast, Direction & Tech" />
      <section className="container ensemble-grid">
        {all.map(m => (
          <div className="ensemble-card" key={m.id}>
            <img src={m.image} alt={m.name} />
            <div className="body">
              <strong>{m.name}</strong>
              <p>{m.role}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
