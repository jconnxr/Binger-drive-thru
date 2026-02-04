import { useState } from 'react'
import { Link } from 'react-router-dom'
import buildingFront from '../assets/buildingfront.jpg'
import DirectionsCTA from '../components/DirectionsCTA'
import { businessHours } from '../data/hours'

const todayName = () => new Date().toLocaleDateString('en-US', { weekday: 'long' })

function isToday(dayLabel) {
  const today = todayName()
  if (!dayLabel) return false
  return dayLabel === today || dayLabel.startsWith(`${today} –`) || dayLabel.endsWith(`– ${today}`) || dayLabel.includes(`– ${today} –`)
}

export default function Home() {
  const [hoursOpen, setHoursOpen] = useState(false)
  return (
    <>
      <section className="hero" aria-label="Binger Drive Thru storefront">
        <div className="hero__image-wrap">
          <img
            src={buildingFront}
            alt="Binger Drive Thru building front on Highway 152 in Binger, Oklahoma"
            className="hero__img"
            fetchPriority="high"
          />
          <div className="hero__overlay" aria-hidden="true" />
        </div>
        <div className="hero__content">
          <h1 className="hero__title">Binger Drive Thru</h1>
          <p className="hero__subtitle">Family-owned drive-thru food & convenience store</p>
          <p className="hero__location">Located on Highway 152 in Binger, Oklahoma</p>
          <div className="hero__actions">
            <a href="tel:+14056562726" className="hero__btn hero__btn--primary">Place Order</a>
            <Link to="/menu" state={{ showOrderPrompt: true }} className="hero__btn hero__btn--secondary">View Menu</Link>
            <DirectionsCTA className="hero__btn hero__btn--tertiary" buttonText="Get Directions" />
          </div>
        </div>
      </section>
      <section className="hours" aria-labelledby="hours-heading">
        <button
          type="button"
          id="hours-heading"
          className="hours__toggle"
          onClick={() => setHoursOpen((open) => !open)}
          aria-expanded={hoursOpen}
          aria-controls="hours-content"
        >
          <span className="hours__toggle-text">Hours</span>
          <span className="hours__toggle-icon" aria-hidden="true">{hoursOpen ? '▲' : '▼'}</span>
        </button>
        <div
          id="hours-content"
          className={`hours__dropdown ${hoursOpen ? 'hours__dropdown--open' : ''}`}
          hidden={!hoursOpen}
        >
          <div className="hours__card">
            <dl className="hours__list">
              {businessHours.map((row, i) => (
                <div
                  key={i}
                  className={`hours__row ${isToday(row.day) ? 'hours__row--today' : ''}`}
                >
                  <dt className="hours__day">{row.day}</dt>
                  <dd className="hours__time">
                    {row.time.includes('656-2726') ? (
                      <a href="tel:+14056562726">{row.time}</a>
                    ) : (
                      row.time
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="hours__note">Hours may vary on holidays. Call if you have questions.</p>
          </div>
        </div>
      </section>
      <section className="offer" aria-labelledby="offer-heading">
        <h2 id="offer-heading" className="section-title">What We Offer</h2>
        <ul className="offer-grid">
          <li className="offer-card"><h3 className="offer-card__title">Fried Foods & Hot Box Items</h3></li>
          <li className="offer-card"><h3 className="offer-card__title">Hunts Brothers Pizza</h3></li>
          <li className="offer-card"><h3 className="offer-card__title">Beer, Energy Drinks & Fountain Drinks</h3></li>
          <li className="offer-card"><h3 className="offer-card__title">Drive-Thru Convenience Items</h3></li>
        </ul>
      </section>
      <section className="menu-preview" aria-labelledby="menu-preview-heading">
        <h2 id="menu-preview-heading" className="section-title">Menu Preview</h2>
        <ul className="menu-preview__list">
          <li>Hot food & hot box</li>
          <li>Pizza by the slice or whole</li>
          <li>Drinks & convenience</li>
        </ul>
        <p className="menu-preview__cta">
          <button type="button" className="coming-soon" disabled aria-label="Online ordering coming soon">
            Online Ordering – Coming Soon
          </button>
        </p>
      </section>
      <section className="credibility" aria-labelledby="credibility-heading">
        <h2 id="credibility-heading" className="section-title">Why Stop Here</h2>
        <p className="credibility__text">
          We are family-owned and operated. We serve our neighbors in Binger and
          travelers on Highway 152 with hot food, pizza, drinks, and everyday
          convenience items. A reliable drive-thru stop when you need it.
        </p>
      </section>
    </>
  )
}
