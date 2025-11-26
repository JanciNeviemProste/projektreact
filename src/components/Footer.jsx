import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <span className="logo-icon">◆</span>
              <span className="logo-text">PREMIUM FINANCE</span>
            </div>
            <p className="footer-description">
              Váš partner pre luxusné finančné riešenia.
              Poskytujeme prémiové služby s osobným prístupom.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Služby</h4>
            <ul>
              <li><a href="#services">Investičné poradenstvo</a></li>
              <li><a href="#services">Správa majetku</a></li>
              <li><a href="#services">Private Banking</a></li>
              <li><a href="#services">Medzinárodné financie</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Spoločnosť</h4>
            <ul>
              <li><a href="#features">O nás</a></li>
              <li><a href="#features">Náš tím</a></li>
              <li><a href="#contact">Kariéra</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Právne informácie</h4>
            <ul>
              <li><a href="#">Ochrana údajov</a></li>
              <li><a href="#">Podmienky používania</a></li>
              <li><a href="#">Cookie politika</a></li>
              <li><a href="#">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Premium Finance. Všetky práva vyhradené.</p>
          <p className="footer-legal">
            Licencované finančné služby | Regulované Národnou bankou Slovenska
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
