import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { menuSections } from '../data/menu'
import chickenBasketImg from '../assets/Chickenbasket.jpg'
import quesadillaBasketImg from '../assets/Quesadillabasket.jpg'
import huntsPizzaImg from '../assets/HuntsPizza.jpg'
import pizzaMenuImg from '../assets/PizzaMenu.jpg'

const PHONE_NUMBER = '4056562726'
const PHONE_DISPLAY = '(405) 656-2726'

const images = {
  chickenBasket: chickenBasketImg,
  quesadillaBasket: quesadillaBasketImg,
  huntsPizza: huntsPizzaImg,
  pizzaMenu: pizzaMenuImg,
}

function CallToOrder() {
  return (
    <div className="menu-call-cta">
      <a href={`tel:+1${PHONE_NUMBER}`} className="menu-call-cta__btn">
        Call to Order
      </a>
      <p className="menu-call-cta__help">Orders placed by phone</p>
    </div>
  )
}

function SectionHotBox({ section }) {
  return (
    <>
      <ul className="menu-list">
        {section.items.map((item, i) => (
          <li key={i}>
            <span className="menu-list__name">{item.name}</span>
            {item.description && <span className="menu-list__desc">{item.description}</span>}
          </li>
        ))}
      </ul>
      <CallToOrder />
    </>
  )
}

function SectionPizza({ section }) {
  const heroSrc = images[section.heroImageKey]
  const menuSrc = images[section.menuImageKey]
  return (
    <>
      {heroSrc && (
        <div className="menu-pizza-hero">
          <img src={heroSrc} alt="" className="menu-pizza-hero__img" loading="lazy" />
        </div>
      )}
      {menuSrc && (
        <div className="menu-pizza-menu-link">
          <a href={menuSrc} target="_blank" rel="noopener noreferrer" className="menu-pizza-menu-link__a" aria-label="View full pizza menu (opens image)">
            <img src={menuSrc} alt="" className="menu-pizza-menu-link__img" />
            <span>View full pizza menu</span>
          </a>
        </div>
      )}
      <div className="menu-pizza-blocks">
        <div className="menu-pizza-block">
          <h3 className="menu-pizza-block__title">Sizes</h3>
          <ul className="menu-list"><li>{section.sizes.join(' · ')}</li></ul>
        </div>
        <div className="menu-pizza-block">
          <h3 className="menu-pizza-block__title">Toppings</h3>
          <ul className="menu-list menu-list--comma">{section.toppings.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>
        <div className="menu-pizza-block">
          <h3 className="menu-pizza-block__title">Specialty</h3>
          <ul className="menu-list menu-list--comma">{section.specialty.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      </div>
      <CallToOrder />
    </>
  )
}

function SectionBaskets({ section }) {
  return (
    <>
      <div className="menu-basket-cards">
        {section.items.map((item, i) => (
          <div key={i} className="menu-basket-card">
            <div className="menu-basket-card__img-wrap">
              <img src={images[item.imageKey]} alt="" className="menu-basket-card__img" loading="lazy" />
            </div>
            <span className="menu-basket-card__name">{item.name}</span>
            {item.label && <span className="menu-basket-card__label">{item.label}</span>}
          </div>
        ))}
      </div>
      <CallToOrder />
    </>
  )
}

function SectionDrinks({ section }) {
  return (
    <>
      <div className="menu-drinks">
        {section.groups.map((group, i) => (
          <div key={i} className="menu-drinks-group">
            <h3 className="menu-drinks-group__title">{group.name}</h3>
            <ul className="menu-list">
              {group.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <CallToOrder />
    </>
  )
}

function SectionConvenience({ section }) {
  return (
    <>
      <ul className="menu-list">
        {section.items.map((item, i) => (
          <li key={i}><span className="menu-list__name">{item.name}</span></li>
        ))}
      </ul>
      <p className="menu-convenience-note">Quick stop on Highway 152. Drive-thru for snacks, drinks, and everyday items.</p>
      <CallToOrder />
    </>
  )
}

function SectionContent({ section }) {
  switch (section.type) {
    case 'hot-box':
      return <SectionHotBox section={section} />
    case 'pizza':
      return <SectionPizza section={section} />
    case 'baskets':
      return <SectionBaskets section={section} />
    case 'drinks':
      return <SectionDrinks section={section} />
    case 'convenience':
      return <SectionConvenience section={section} />
    default:
      return null
  }
}

export default function Menu() {
  const location = useLocation()
  const showOrderPrompt = location.state?.showOrderPrompt === true
  const [orderPromptDismissed, setOrderPromptDismissed] = useState(false)
  const showPrompt = showOrderPrompt && !orderPromptDismissed
  const [activeId, setActiveId] = useState(menuSections[0].id)
  const [highlightedId, setHighlightedId] = useState(null)
  const panelRefs = useRef({})

  useEffect(() => {
    if (showOrderPrompt) setOrderPromptDismissed(false)
  }, [showOrderPrompt])

  useEffect(() => {
    if (!activeId) return
    const el = panelRefs.current[activeId]
    if (!el) return
    let timeoutId
    const frameId = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setHighlightedId(activeId)
      timeoutId = setTimeout(() => setHighlightedId(null), 650)
    })
    return () => {
      cancelAnimationFrame(frameId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [activeId])

  return (
    <div className="menu-page">
      {showPrompt && (
        <div className="menu-order-prompt" role="region" aria-labelledby="order-prompt-heading">
          <div className="menu-order-prompt__inner">
            <h2 id="order-prompt-heading" className="menu-order-prompt__title">Call to place an order</h2>
            <p className="menu-order-prompt__text">Ready when you are. Call us to place your order or ask about the menu.</p>
            <a href={`tel:+1${PHONE_NUMBER}`} className="menu-order-prompt__btn">Call Now</a>
            <button type="button" className="menu-order-prompt__dismiss" onClick={() => setOrderPromptDismissed(true)} aria-label="Dismiss">×</button>
          </div>
        </div>
      )}
      <header className="menu-page__header">
        <h1 className="menu-page__title">Menu</h1>
        <p className="menu-page__intro">Hot food, pizza, drinks, and convenience. Call to order.</p>
      </header>

      <nav className="menu-nav" aria-label="Menu sections">
        <ul className="menu-nav__list">
          {menuSections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                className={`menu-nav__btn menu-nav__btn--${section.id} ${activeId === section.id ? 'menu-nav__btn--active' : ''}`}
                onClick={() => setActiveId(section.id)}
                aria-expanded={activeId === section.id}
                aria-controls={`menu-panel-${section.id}`}
                id={`menu-tab-${section.id}`}
              >
                {section.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="menu-panels">
        {menuSections.map((section) => (
          <div
            key={section.id}
            ref={(el) => { if (el) panelRefs.current[section.id] = el }}
            id={`menu-panel-${section.id}`}
            role="region"
            aria-labelledby={`menu-tab-${section.id}`}
            className={`menu-panel menu-panel--${section.id} ${activeId === section.id ? 'menu-panel--open' : ''} ${highlightedId === section.id ? 'menu-panel--highlighted' : ''}`}
            hidden={activeId !== section.id}
          >
            <div className="menu-panel__inner">
              <h2 className="menu-panel__title">
                <span className="menu-panel__marker" aria-hidden="true" />
                {section.name}
              </h2>
              <SectionContent section={section} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
