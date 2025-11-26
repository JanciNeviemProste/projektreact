import React, { useEffect, useState, useRef } from 'react'
import './Stats.css'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  const stats = [
    { number: '2500+', label: 'Spokojných klientov', suffix: '' },
    { number: '€1.2B', label: 'Spravovaných aktív', suffix: '' },
    { number: '20+', label: 'Rokov skúseností', suffix: '' },
    { number: '98%', label: 'Úspešnosť', suffix: '' }
  ]

  return (
    <section className="stats" ref={statsRef}>
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-item ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
