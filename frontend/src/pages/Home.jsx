import React, { useState, useEffect, useCallback } from 'react'
import Hero from '../components/Hero.jsx'
import ImageScroller from '../components/ImageScroller.jsx'
import { Link } from 'react-router-dom'
import productions from '../data/productions.js'
import events from '../data/events.js'

/* =========================================
   Upcoming Events — Image Slideshow
   Uses img26.jpeg through img31.jpeg
   ========================================= */
const SLIDE_IMAGES = [
  '/img26.jpeg',
  '/img27.jpeg',
  '/img28.jpeg',
  '/img29.jpeg',
  '/img30.jpeg',
  '/img31.jpeg',
]

function EventsSlideshow() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const total = SLIDE_IMAGES.length

  const goTo = useCallback((index) => {
    setFading(true)
    setTimeout(() => {
      setCurrent((index + total) % total)
      setFading(false)
    }, 300)
  }, [total])

  // Auto-advance every 4 seconds
  useEffect(() => {
    const id = setInterval(() => goTo(current + 1), 4000)
    return () => clearInterval(id)
  }, [current, goTo])

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        boxShadow: '0 16px 56px rgba(0,0,0,.65), 0 0 40px rgba(192,57,43,.18)',
        border: '1px solid rgba(212,175,55,.18)',
        background: '#080507',
        userSelect: 'none',
        /* Let height follow the image naturally */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Main slide image — contain so the full photo is always visible */}
      <img
        src={SLIDE_IMAGES[current]}
        alt={`Event slide ${current + 1}`}
        style={{
          width: '100%',
          maxHeight: 'clamp(320px, 75vw, 640px)',
          objectFit: 'contain',   /* show full image, no cropping */
          display: 'block',
          opacity: fading ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Gradient overlay at bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(9,6,10,.9) 0%, rgba(9,6,10,.4) 50%, transparent 100%)',
        padding: '56px 28px 20px',
        pointerEvents: 'none',
      }}>
        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', pointerEvents: 'auto' }}>
          {SLIDE_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                borderRadius: 4,
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                background: i === current ? 'var(--accent)' : 'rgba(212,175,55,.4)',
                transition: 'width .35s ease, background .35s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Slide counter — top right */}
      <div style={{
        position: 'absolute', top: 14, right: 14,
        background: 'rgba(9,6,10,.72)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(212,175,55,.22)',
        borderRadius: 999,
        padding: '4px 12px',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.8px',
        color: 'var(--accent)',
      }}>
        {current + 1} / {total}
      </div>

      {/* Prev arrow */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Previous"
        style={{
          position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
          width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(9,6,10,.72)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(212,175,55,.25)',
          color: 'var(--accent)',
          fontSize: 24, lineHeight: 1,
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .2s, border-color .2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(212,175,55,.18)'
          e.currentTarget.style.borderColor = 'rgba(212,175,55,.6)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(9,6,10,.72)'
          e.currentTarget.style.borderColor = 'rgba(212,175,55,.25)'
        }}
      >&#8249;</button>

      {/* Next arrow */}
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next"
        style={{
          position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
          width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(9,6,10,.72)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(212,175,55,.25)',
          color: 'var(--accent)',
          fontSize: 24, lineHeight: 1,
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .2s, border-color .2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(212,175,55,.18)'
          e.currentTarget.style.borderColor = 'rgba(212,175,55,.6)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(9,6,10,.72)'
          e.currentTarget.style.borderColor = 'rgba(212,175,55,.25)'
        }}
      >&#8250;</button>
    </div>
  )
}

/* =========================================
   Home Page
   ========================================= */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* QUOTE BAND */}
      <section className="container" style={{ paddingBottom: 0 }}>
        <div className="quote-band">
          <p className="quote-band-text">
            &#x201C;&#x09A8;&#x09BE;&#x099F;&#x0995; &#x09B6;&#x09C1;&#x09A7;&#x09C1; &#x09AE;&#x099E;&#x09CD;&#x099A;&#x09C7;&#x09B0; &#x0997;&#x09B2;&#x09CD;&#x09AA; &#x09A8;&#x09AF;&#x09BC; &#x2014;<br />
            <span>&#x098F; &#x099C;&#x09C0;&#x09AC;&#x09A8;&#x09C7;&#x09B0; &#x09A6;&#x09B0;&#x09CD;&#x09AA;&#x09A3;&#x09F7;</span>&#x201D;
          </p>
          <p className="quote-band-attr">Theatre is not just a story on stage — it is the mirror of life.</p>
        </div>
      </section>

      {/* IMAGE SCROLLER */}
      <section className="container section">
        <div className="sec-head">
          <div className="sec-label">&#x09AE;&#x099E;&#x09CD;&#x099A;&#x09C7;&#x09B0; &#x09AE;&#x09C1;&#x09B9;&#x09C2;&#x09B0;&#x09CD;&#x09A4;</div>
          <h2 className="sec-title">On Stage <em>Moments</em></h2>
          <p className="sec-desc">Glimpses from our rehearsals and performances</p>
          <div className="sec-divider">
            <div className="sec-divider-line" />
            <span>&#10022;</span>
            <div className="sec-divider-line r" />
          </div>
        </div>
        <ImageScroller />
      </section>

      {/* PRODUCTIONS */}
      <section className="container section">
        <div className="sec-head">
          <div className="sec-label">&#x09A8;&#x09A4;&#x09C1;&#x09A8; &#x09AA;&#x09CD;&#x09B0;&#x09AF;&#x09CB;&#x099C;&#x09A8;&#x09BE;</div>
          <h2 className="sec-title">Latest <em>Productions</em></h2>
          <p className="sec-desc">Our recent and acclaimed stage works</p>
          <div className="sec-divider">
            <div className="sec-divider-line" />
            <span>&#127917;</span>
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
          <Link className="btn secondary" to="/productions">&#x09B8;&#x09AC; &#x09AA;&#x09CD;&#x09B0;&#x09AF;&#x09CB;&#x099C;&#x09A8;&#x09BE; &#x09A6;&#x09C7;&#x0996;&#x09C1;&#x09A8; &rarr;</Link>
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 16,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: 'clamp(16px, 4vw, 32px) clamp(14px, 3.5vw, 28px)',
        }}>
          {[
            { icon: '&#127917;', title: '&#x09AE;&#x099E;&#x09CD;&#x099A; &#x09A8;&#x09BE;&#x099F;&#x0995;', sub: 'Original Bengali plays' },
            { icon: '&#127912;', title: '&#x0995;&#x09B0;&#x09CD;&#x09AE;&#x09B6;&#x09BE;&#x09B2;&#x09BE;', sub: 'Workshops & training' },
            { icon: '&#127866;', title: '&#x09B8;&#x0982;&#x09B8;&#x09CD;&#x0995;&#x09C3;&#x09A4;&#x09BF;', sub: 'Rooted in Bengali culture' },
            { icon: '&#11088;', title: '&#x09B8;&#x09AE;&#x09CD;&#x09AA;&#x09CD;&#x09B0;&#x09A6;&#x09BE;&#x09AF;&#x09BC;', sub: 'Community-first theatre' },
          ].map(item => (
            <div key={item.sub} style={{ textAlign: 'center', padding: '8px 0' }}>
              <div style={{ fontSize: 32, marginBottom: 10, filter: 'drop-shadow(0 0 8px rgba(212,175,55,.4))' }}
                dangerouslySetInnerHTML={{ __html: item.icon }} />
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}
                dangerouslySetInnerHTML={{ __html: item.title }} />
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING EVENTS — SLIDESHOW */}
      <section className="container section">
        <div className="sec-head">
          <div className="sec-label">&#x0986;&#x09B8;&#x09A8;&#x09CD;&#x09A8; &#x0985;&#x09A8;&#x09C1;&#x09B7;&#x09CD;&#x09A0;&#x09BE;&#x09A8;</div>
          <h2 className="sec-title">Upcoming <em>Events</em></h2>
          <p className="sec-desc">Showtimes, workshops &amp; special programmes</p>
          <div className="sec-divider">
            <div className="sec-divider-line" />
            <span>&#10022;</span>
            <div className="sec-divider-line r" />
          </div>
        </div>

        <EventsSlideshow />
      </section>

      {/* JOIN CTA */}
      {/* <section className="container" style={{ paddingTop: 0 }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(192,57,43,.18) 0%, rgba(212,175,55,.1) 100%)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 40px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(212,175,55,.05), transparent)',
          }} />
          <div style={{ fontSize: 36, marginBottom: 14 }}>&#127917;</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3vw,36px)',
            fontWeight: 700, marginBottom: 10, color: 'var(--text)',
          }}>
            &#x0986;&#x09AE;&#x09BE;&#x09A6;&#x09C7;&#x09B0; &#x09B8;&#x09BE;&#x09A5;&#x09C7; &#x09AF;&#x09CB;&#x0997; &#x09A6;&#x09BF;&#x09A8;
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '42ch', margin: '0 auto 28px', fontSize: 14.5 }}>
            Join Harinavi DrishyaKabbyo — be part of the story, the stage, and the spirit of Bengali theatre.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/signup">&#x09AF;&#x09CB;&#x0997; &#x09A6;&#x09BF;&#x09A8; &rarr;</Link>
            <Link className="btn secondary" to="/contact">&#x0986;&#x09AE;&#x09BE;&#x09A6;&#x09C7;&#x09B0; &#x09B8;&#x09BE;&#x09A5;&#x09C7; &#x0995;&#x09A5;&#x09BE; &#x09AC;&#x09B2;&#x09C1;&#x09A8;</Link>
          </div>
        </div>
      </section> */}
    </>
  )
}
