import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Ďakujeme za váš záujem! Čoskoro vás budeme kontaktovať.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-left">
            <span className="section-tag">Kontaktujte nás</span>
            <h2 className="section-title">Začnime spoluprácu</h2>
            <p className="contact-description">
              Sme tu pre vás. Kontaktujte nás a my vám pomôžeme nájsť optimálne
              finančné riešenie pre vaše potreby.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>Adresa</h4>
                  <p>Pluhová 17, 831 03 Bratislava</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>info@premiumfinance.sk</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📱</div>
                <div className="info-content">
                  <h4>Telefón</h4>
                  <p>+421 123 456 789</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕐</div>
                <div className="info-content">
                  <h4>Pracovný čas</h4>
                  <p>Po - Pi: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Meno a priezvisko</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Vaše meno"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="vas@email.sk"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefón</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+421 123 456 789"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Správa</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Ako vám môžeme pomôcť?"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Odoslať správu
                <span className="arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
