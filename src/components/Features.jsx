import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-content">
          <div className="features-left">
            <span className="section-tag">Prečo my</span>
            <h2 className="section-title">Excelentnosť v každom detaile</h2>
            <p className="features-description">
              S viac ako 20-ročnými zkúsenosťami v oblasti finančných služieb sme sa stali
              lídrom v poskytovaní prémiových riešení pre náročných klientov.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <div className="feature-content">
                  <h3>Odbornosť a skúsenosti</h3>
                  <p>Certifikovaní finančný poradcovia s medzinárodnou praxou</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <div className="feature-content">
                  <h3>Bezpečnosť a dôvera</h3>
                  <p>Najvyššie štandardy ochrany vašich finančných údajov</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-content">
                  <h3>Inovatívne riešenia</h3>
                  <p>Využívame najnovšie technológie a analytické nástroje</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <div className="feature-content">
                  <h3>Osobný prístup</h3>
                  <p>Každý klient je pre nás jedinečný s individuálnymi potrebami</p>
                </div>
              </div>
            </div>
          </div>

          <div className="features-right">
            <div className="features-image">
              <div className="image-placeholder">
                <div className="floating-card card-1">
                  <div className="card-icon">📊</div>
                  <div className="card-text">
                    <div className="card-label">ROI</div>
                    <div className="card-value">+24.5%</div>
                  </div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">💎</div>
                  <div className="card-text">
                    <div className="card-label">Portfolio Value</div>
                    <div className="card-value">€2.4M</div>
                  </div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">📈</div>
                  <div className="card-text">
                    <div className="card-label">Growth</div>
                    <div className="card-value">+18%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
