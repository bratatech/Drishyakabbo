import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/drishyakabya_final_logo-01.jpg.jpeg'

const nav = [
  { to: '/', label: 'হোম', en: 'Home' },
  { to: '/productions', label: 'প্রযোজনা', en: 'Productions' },
  { to: '/events', label: 'অনুষ্ঠান', en: 'Events' },
  { to: '/ensemble', label: 'দল', en: 'Ensemble' },
  { to: '/gallery', label: 'গ্যালারি', en: 'Gallery' },
  // { to: '/blog',        label: 'ব্লগ',       en: 'Blog' },
  // { to: '/tickets',     label: 'টিকিট',      en: 'Tickets' },
  // { to: '/contact',     label: 'যোগাযোগ',    en: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
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
              Harinavi DrishyaKabbyo
            </span>
          </div>
        </Link>

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
          {/* <Link
            to="/signup"
            style={{
              background: 'linear-gradient(135deg,var(--sindoor),var(--primary2))',
              color: '#fff', padding: '7px 16px', borderRadius: 8,
              fontSize: 13, fontWeight: 600, letterSpacing: '.3px',
              transition: 'filter .2s, transform .2s',
              marginLeft: 4,
            }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.15)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            যোগ দিন
          </Link> */}
        </nav>
      </div>
    </header>
  )
}
