import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div>
            <div className="brand">
              <span role="img" aria-label="mask">🎭</span>
              <strong>Drishyakabbo</strong>
            </div>
            <p className="section">
              A creative home for contemporary Bengali theatre.
            </p>
            <small>© {new Date().getFullYear()} Drishyakabbo</small>
          </div>
          <div>
            <strong>Links</strong>
            <div className="list section">
              <Link to="/about">About Us</Link>
              <Link to="/productions">Productions</Link>
              <Link to="/events">Events</Link>
              <Link to="/tickets">Tickets</Link>
            </div>
          </div>
          <div>
            <strong>Contact</strong>
            <div className="list section">
              <a href="drishyakabyaharinavi1@gmail.com">email</a>
              {/*}<a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>{*/}
              <a href="https://youtube.com/@harinavidrishyakabya?si=jwTjtieg6pWwLGEU" target="_blank" rel="noreferrer">Youtube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
