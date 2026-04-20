import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/productions', label: 'Productions' },
  { to: '/events', label: 'Events' },
  { to: '/ensemble', label: 'Ensemble' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/tickets', label: 'Tickets' },
  { to: '/contact', label: 'Contact' },
  { to: '/signup', label: 'Sign Up' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link className="brand" to="/">
          <img className="mark" src={logo} alt="Drishyakabbo" />
          <span>Drishyakabbo</span>
        </Link>
        <nav className="nav-links">
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
