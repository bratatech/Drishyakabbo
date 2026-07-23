import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const PETALS = ['🌸', '🌺', '✿', '❋', '🌼']

export default function Hero() {
  const petalRef = useRef(null)

  useEffect(() => {
    const container = petalRef.current
    if (!container) return
    let id
    let count = 0
    const spawn = () => {
      if (count >= 10) return
      const el = document.createElement('span')
      el.textContent = PETALS[Math.floor(Math.random() * PETALS.length)]
      el.style.cssText = `
        position:absolute; pointer-events:none; user-select:none;
        left:${Math.random() * 100}%; top:-30px; opacity:0;
        font-size:${14 + Math.random() * 12}px;
        animation: petalFall ${8 + Math.random() * 8}s linear ${Math.random() * 4}s forwards;
        z-index:1;
      `
      container.appendChild(el)
      count++
      el.addEventListener('animationend', () => { el.remove(); count-- })
    }
    const interval = setInterval(spawn, 1200)
    return () => { clearInterval(interval) }
  }, [])

  return (
    <div className="hero-wrapper" ref={petalRef}>
      <style>{`
        @keyframes petalFall {
          0%   { opacity:0; transform: translateY(0) rotate(0deg) scale(1); }
          8%   { opacity:.8; }
          92%  { opacity:.35; }
          100% { opacity:0; transform: translateY(95vh) rotate(540deg) scale(.6); }
        }
      `}</style>

      {/* Background image */}
      <img className="hero-bg-img" src="/img20.jpeg" alt="" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-glow-ring" aria-hidden="true" />

      {/* Main content */}
      <div className="hero-content">

        {/* Left column */}
        <div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            বাংলা থিয়েটার · Bengali Theatre
          </div>

          <h1 className="hero-title">হরিনাভি<br />দৃশ্যকাব্য</h1>

          <div className="hero-orn">
            <div className="hero-orn-line" />
            <span className="hero-orn-icon">🎭</span>
            <div className="hero-orn-line" />
          </div>

          <p className="hero-subtitle">
            A vibrant collective for contemporary Bengali theatre — weaving stories, staging emotions, and celebrating the art of the stage.
          </p>
          <p className="hero-subtitle-bn">
            মঞ্চের আলোয় জীবনের গল্প বলি আমরা।
          </p>

          <div className="hero-cta">
            {/* <Link className="btn" to="/tickets">টিকিট বুক করুন &rarr;</Link>
            <Link className="btn secondary" to="/productions">প্রযোজনা দেখুন</Link> */}
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">৮+</div>
              <div className="hero-stat-label">Productions</div>
            </div>
            <div>
              <div className="hero-stat-num">8 বছর</div>
              <div className="hero-stat-label">On Stage</div>
            </div>
            <div>
              <div className="hero-stat-num"> ৫০০০+</div>
              <div className="hero-stat-label">Audience</div>
            </div>
          </div>
        </div>

        { /*Right column*/
          <div className="hero-right">
            <div className="hero-img-wrap">
              <img className="hero-img"
                src="/img25.jpeg" alt="হরিনাভি দৃশ্যকাব্য — মঞ্চের একটি মুহূর্ত" />
              {/* <div className="hero-img-pill">
                <div className="hero-img-pill-title">সাম্প্রতিক প্রযোজনা</div>
                <div className="hero-img-pill-sub">Latest Production · 2024</div>
              </div> */}
            </div>
          </div>}
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-mouse" />
        <span>নিচে দেখুন</span>
      </div>
    </div>
  )
}
