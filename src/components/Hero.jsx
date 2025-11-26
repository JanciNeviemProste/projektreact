import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-tag">Exkluzívne finančné služby</div>
        <h1 className="hero-title">
          Váš partner pre <span className="gradient-text">luxusné</span> finančné riešenia
        </h1>
        <p className="hero-subtitle">
          Poskytujeme prémiové finančné poradenstvo a investičné stratégie pre náročných klientov.
          Váš úspech je naša priorita.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToContact}>
            Začať teraz
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn btn-secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            Naše služby
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
