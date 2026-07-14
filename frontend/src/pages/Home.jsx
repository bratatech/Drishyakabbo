import React, { useState, useEffect, useCallback } from 'react'
import Hero from '../components/Hero.jsx'
import ImageScroller from '../components/ImageScroller.jsx'
import { Link } from 'react-router-dom'
import productions from '../data/productions.js'
import events from '../data/events.js'

const SLIDE_IMAGES = [
  { src: '/img26.jpeg', caption: 'আসন্ন অনুষ্ঠান · Upcoming Event' },
  { src: '/img27.jpeg', caption: 'মঞ্চ প্রস্তুতি · Stage Preparation' },
  { src: '/img28.jpeg', caption: 'দলগত মহড়া · Group Rehearsal' },
  { src: '/img29.jpeg', caption: 'বিশেষ প্রদর্শনী · Special Show' },
  { src: '/img30.jpeg', caption: 'কর্মশালা · Workshop Session' },
  { src: '/img31.jpeg', caption: 'সাংস্কৃতিক অনুষ্ঠান · Cultural Programme' },
]

function EventsSlideshow() {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)
  const total = SLIDE_IMAGES.length

  const goTo = useCallback((idx) => {
    setFade(false)
    setTimeout(() => {
      setCurrent((idx + total) % total)
      setFade(true)
    }, 260)
  }, [total])

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 4000)
    return () => clearInterval(timer)
  }, [current, goTo])

  const slide = SLIDE_IMAGES[current]

  return (
    <section className="container section">
      <div className="sec-head">
        <div className="sec-label">আসন্ন অনুষ্ঠান</div>
        <h2 className="sec-title">Upcoming <em>Events</em></h2>
        <p className="sec-desc">Showtimes, workshops &amp; special programmes</p>
        <div className="sec-divider">
          <div className="sec-divider-line" />
          <span>✦</span>
          <div className="sec-divider-line r" />
        </div>
      </div>

      <div style={{
        position: 'relative',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        boxShadow: '0 16px 56px rgba(0,0,0,.65), 0 0 40px rgba(192,57,43,.18)',
        border: '1px solid rgba(212,175,55,.18)',
        background: '#0a0709',
        userSelect: 'none',
      }}>

        {/* Slide image */}
        <img
          src={slide.src}
          alt={slide.caption}
          style={{
            width: '100%',
            height: 'clamp(280px, 52vw, 560px)',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            opacity: fade ? 1 : 0,
            transition: 'opacity 0.28s ease',
          }}
        />

        {/* Bottom gradient overlay + caption */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(to top, rgba(9,6,10,.92) 0%, rgba(9,6,10,.5) 55%, transparent 100%)',
          padding: '48px 28px 22px',
          pointerEvents: 'none',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(14px,2vw,20px)',
            color: 'var(--text)',
            opacity: fade ? 1 : 0,
            transition: 'opacity 0.28s ease',
          }}>{slide.caption}</div>
          <div style={{ marginTop: 6, display: 'flex', gap: 8, alignItems: 'center' }}>
            {SLIDE_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  background: i === current ? 'var(--accent)' : 'rgba(212,175,55,.35)',
                  transition: 'width .35s ease, background .35s ease',
                  pointerEvents: 'auto',
                }}
              />
            ))}
          </div>
        </div>

        {/* Slide counter badge */}
        <div style={{
          position: 'absolute', top: 16, right: 16,
          background: 'rgba(9,6,10,.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(212,175,55,.22)',
          borderRadius: 999,
          padding: '4px 12px',
          fontSize: 12,
          color: 'var(--accent)',
          fontWeight: 600,
          letterSpacing: '.8px',
        }}>{current + 1} / {total}</div>

        {/* Prev arrow */}
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Previous slide"
          style={{
            position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(9,6,10,.72)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(212,175,55,.25)',
            color: 'var(--accent)',
            fontSize: 20, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .2s, border-color .2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,.18)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,.6)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(9,6,10,.72)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,.25)' }}
        >&#8249;</button>

        {/* Next arrow */}
        <button
          onClick={() => goTo(current + 1)}
          aria-label="Next slide"
          style={{
            position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(9,6,10,.72)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(212,175,55,.25)',
            color: 'var(--accent)',
            fontSize: 20, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .2s, border-color .2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,.18)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,.6)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(9,6,10,.72)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,.25)' }}
        >&#8250;</button>
      </div>
    </section>
  )
}

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

      {/* ── EVENTS SLIDESHOW ── */}
      <EventsSlideshow />

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
