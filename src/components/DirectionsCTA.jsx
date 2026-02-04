import { useState } from 'react'

const ADDRESS = '121+E+Main+St,+Binger,+OK+73009'
const GOOGLE_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${ADDRESS}`
const APPLE_MAPS_URL = `https://maps.apple.com/?daddr=${ADDRESS}`

function openGoogleMaps() {
  window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer')
}

function openAppleMaps() {
  window.open(APPLE_MAPS_URL, '_blank', 'noopener,noreferrer')
}

export default function DirectionsCTA({ className, buttonText = 'Get Directions', variant = 'button' }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleChoice = (openFn) => {
    openFn()
    setIsOpen(false)
  }

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {buttonText}
      </button>

      {isOpen && (
        <div
          className="directions-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="directions-modal-title"
        >
          <div className="directions-modal__backdrop" onClick={() => setIsOpen(false)} aria-hidden="true" />
          <div className="directions-modal__panel">
            <button
              type="button"
              className="directions-modal__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 id="directions-modal-title" className="directions-modal__title">Get Directions</h2>
            <p className="directions-modal__subtitle">Choose your preferred maps app</p>
            <div className="directions-modal__actions">
              <button
                type="button"
                className="directions-modal__btn directions-modal__btn--google"
                onClick={() => handleChoice(openGoogleMaps)}
              >
                Google Maps
              </button>
              <button
                type="button"
                className="directions-modal__btn directions-modal__btn--apple"
                onClick={() => handleChoice(openAppleMaps)}
              >
                Apple Maps
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
