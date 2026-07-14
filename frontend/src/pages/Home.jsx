import React from 'react'
import Hero from '../components/Hero.jsx'
import ImageScroller from '../components/ImageScroller.jsx'
import { Link } from 'react-router-dom'
import productions from '../data/productions.js'
import events from '../data/events.js'

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <Hero />

      {/* ── QUOTE BAND ── */}
      <section className="container" style={{ paddingBottom: 0 }}>
        <div className="quote-band">
          <p className="quote-band-text">
            "নাটক শুধু মঞ্চের গল্প নয় —<br />
            <span>এ জীবনের দর্পণ।</span>"
          </p>
          <p className="quote-band-attr">Theatre is not just a story on stage — it is the mirror of life.</p>
        </div>
      </section>

      {/* ── IMAGE SCROLLER ── */}
      <section className="container section">
        <div className="sec-head">
          <div className="sec-label">মঞ্চের মুহূর্ত</div>
          <h2 className="sec-title">On Stage <em>Moments</em></h2>
          <p className="sec-desc">Glimpses from our rehearsals and performances</p>
          <div className="sec-divider">
            <div className="sec-divider-line" />
            <span>✦</span>
            <div className="sec-divider-line r" />
          </div>
        </div>
        <ImageScroller />
      </section>

      {/* ── PRODUCTIONS ── */}
      <section className="container section">
        <div className="sec-head">
          <div className="sec-label">নতুন প্রযোজনা</div>
          <h2 className="sec-title">Latest <em>Productions</em></h2>
          <p className="sec-desc">Our recent and acclaimed stage works</p>
          <div className="sec-divider">
            <div className="sec-divider-line" />
            <span>🎭</span>
            <div className="sec-divider-line r" />
          </div>
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

        <div className="cta-row" style={{ justifyContent: 'center', marginTop: 28 }}>
          <Link className="btn secondary" to="/productions">সব প্রযোজনা দেখুন &rarr;</Link>
        </div>
      </section>

      {/* ── WHY US STRIP ── */}
      <section className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 16,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '32px 28px',
        }}>
          {[
            { icon: '🎭', title: 'মঞ্চ নাটক', sub: 'Original Bengali plays' },
            { icon: '🎨', title: 'কর্মশালা', sub: 'Workshops & training' },
            { icon: '🌺', title: 'সংস্কৃতি', sub: 'Rooted in Bengali culture' },
            { icon: '🌟', title: 'সম্প্রদায়', sub: 'Community-first theatre' },
          ].map(item => (
            <div key={item.title} style={{ textAlign: 'center', padding: '8px 0' }}>
              <div style={{ fontSize: 32, marginBottom: 10, filter: 'drop-shadow(0 0 8px rgba(212,175,55,.4))' }}>{item.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{item.title}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EVENTS ── */}
      {/* <section className="container section">
        <div className="sec-head">
          <div className="sec-label">আসন্ন অনুষ্ঠান</div>
          <h2 className="sec-title">Upcoming <em>Events</em></h2>
          <p className="sec-desc">Showtimes, workshops & special programmes</p>
          <div className="sec-divider">
            <div className="sec-divider-line" />
            <span>✦</span>
            <div className="sec-divider-line r" />
          </div>
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

        <div className="cta-row" style={{ justifyContent: 'center', marginTop: 28 }}>
          <Link className="btn secondary" to="/events">সব অনুষ্ঠান দেখুন &rarr;</Link>
        </div>
      </section> */}

      {/* ── JOIN CTA ── */}
      <section className="container" style={{ paddingTop: 0 }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(192,57,43,.18) 0%, rgba(212,175,55,.1) 100%)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '48px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(212,175,55,.05), transparent)',
          }} />
          <div style={{ fontSize: 36, marginBottom: 14 }}>🎭</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3vw,36px)',
            fontWeight: 700, marginBottom: 10, color: 'var(--text)',
          }}>
            আমাদের সাথে যোগ দিন
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '42ch', margin: '0 auto 28px', fontSize: 14.5 }}>
            Join Harinavi DrishyaKabbyo — be part of the story, the stage, and the spirit of Bengali theatre.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/signup">যোগ দিন &rarr;</Link>
            <Link className="btn secondary" to="/contact">আমাদের সাথে কথা বলুন</Link>
          </div>
        </div>
      </section>
    </>
  )
}
