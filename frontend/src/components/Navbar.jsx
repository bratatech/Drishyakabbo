import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/drishyakabya_final_logo-01.jpg.jpeg'

const nav = [
  { to: '/', label: 'Home', en: 'Home' },
  { to: '/productions', label: 'Productions', en: 'Productions' },
  { to: '/events', label: 'Events', en: 'Events' },
  { to: '/ensemble', label: 'Team', en: 'Ensemble' },
  { to: '/gallery', label: 'Gallery', en: 'Gallery' },
  // { to: '/blog',        label: 'ব্লগ',       en: 'Blog' },
  // { to: '/tickets',     label: 'টিকিট',      en: 'Tickets' },
  // { to: '/contact',     label: 'যোগাযোগ',    en: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  /* Close menu on outside click — use pointerdown to avoid race with NavLink navigation */
  useEffect(() => {
    if (!open) return
    const handle = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', handle)
    return () => {
      document.removeEventListener('pointerdown', handle)
    }
  }, [open])

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <style>{`
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px; height: 40px;
          background: rgba(212,175,55,.08);
          border: 1px solid rgba(212,175,55,.22);
          border-radius: 9px;
          cursor: pointer;
          flex-shrink: 0;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        .hamburger span {
          display: block;
          width: 20px; height: 2px;
          background: var(--accent);
          border-radius: 2px;
          transition: transform .25s, opacity .25s;
        }
        .hamburger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.is-open span:nth-child(2) { opacity: 0; }
        .hamburger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 49;
          background: rgba(9,6,10,.96);
          backdrop-filter: blur(20px);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          animation: slideDown .22s ease;
        }
        .mobile-menu.is-open { display: flex; }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-nav-link {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 700;
          color: rgba(253,240,224,.75);
          padding: 14px 40px;
          border-radius: 12px;
          letter-spacing: .3px;
          transition: color .2s, background .2s;
          text-align: center; width: 100%; max-width: 320px;
          text-decoration: none;
          cursor: pointer;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          display: block;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active { color: var(--accent); background: rgba(212,175,55,.08); }

        .mobile-close {
          position: absolute; top: 18px; right: 18px;
          width: 40px; height: 40px;
          background: rgba(212,175,55,.08);
          border: 1px solid rgba(212,175,55,.22);
          border-radius: 50%; cursor: pointer;
          color: var(--accent); font-size: 22px;
          display: flex; align-items: center; justify-content: center;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        @media (max-width: 640px) {
          .hamburger { display: flex; }
          .nav-links  { display: none; }
        }
      `}</style>

      <div ref={wrapperRef} style={{ display: 'contents' }}>
        <header className="navbar">
          <div className="nav-inner">
            <Link className="brand" to="/" onClick={() => setOpen(false)}>
              <img className="mark" src={logo} alt="হরিনাভি দৃশ্যকাব্য" />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700,
                  background: 'linear-gradient(135deg, var(--text), var(--accent))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>হরিনাভি দৃশ্যকাব্য</span>
                <span style={{ fontSize: 9, letterSpacing: '1.8px', textTransform: 'uppercase', color: 'var(--muted2)', WebkitTextFillColor: 'var(--muted2)' }}>
                  Harinavi DrishyaKabya
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="nav-links" aria-label="Main navigation">
              {nav.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                  title={item.en}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Hamburger (mobile only) */}
            <button
              className={`hamburger${open ? ' is-open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>
          </div>
        </header>

        {/* Full-screen mobile menu */}
        <div className={`mobile-menu${open ? ' is-open' : ''}`} role="dialog" aria-label="Navigation menu">
          <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => 'mobile-nav-link' + (isActive ? ' active' : '')}
              onClick={() => setOpen(false)}
            >
              {item.label}
              <div style={{ fontSize: 12, color: 'var(--muted2)', marginTop: 2, fontFamily: 'var(--font-body)', fontWeight: 400 }}>{item.en}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}
