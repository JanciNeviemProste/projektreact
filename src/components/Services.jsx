import React from 'react'
import './Services.css'

const servicesData = [
  {
    icon: '💼',
    title: 'Investičné poradenstvo',
    description: 'Personalizované investičné stratégie prispôsobené vašim finančným cieľom a rizikovému profilu.',
    features: ['Portfolio management', 'Asset allocation', 'Risk analysis']
  },
  {
    icon: '📈',
    title: 'Správa majetku',
    description: 'Komplexná správa vášho majetku s dôrazom na dlhodobý rast a ochranu kapitálu.',
    features: ['Wealth planning', 'Tax optimization', 'Estate planning']
  },
  {
    icon: '🏦',
    title: 'Private Banking',
    description: 'Exkluzívne bankové služby s osobným prístupom a prémiovou obsluhou 24/7.',
    features: ['Personal banker', 'Exclusive rates', 'Premium services']
  },
  {
    icon: '🌍',
    title: 'Medzinárodné financie',
    description: 'Globálne finančné riešenia a prístup k medzinárodným investičným príležitostiam.',
    features: ['Global markets', 'Currency exchange', 'International transfers']
  }
]

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-tag">Naše služby</span>
          <h2 className="section-title">Prémiové finančné riešenia</h2>
          <p className="section-subtitle">
            Poskytujeme komplexné finančné služby šité na míru vašim potrebám
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-button">
                Zistiť viac
                <span className="arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
