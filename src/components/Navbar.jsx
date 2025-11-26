import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">PREMIUM FINANCE</span>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li><a onClick={() => scrollToSection('hero')}>Domov</a></li>
          <li><a onClick={() => scrollToSection('services')}>Služby</a></li>
          <li><a onClick={() => scrollToSection('features')}>O nás</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Kontakt</a></li>
          <li><a className="cta-button" onClick={() => scrollToSection('contact')}>Konzultácia</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
