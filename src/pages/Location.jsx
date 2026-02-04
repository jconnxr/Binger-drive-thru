export default function Location() {
  return (
    <div className="location-page">
      <header className="location-page__header">
        <h1 className="location-page__title">Location</h1>
        <p className="location-page__tagline">
          On Highway 152 in Binger, Oklahoma. Easy in, easy out.
        </p>
      </header>
      <section className="location-page__address" aria-labelledby="address-heading">
        <h2 id="address-heading">Address</h2>
        <p className="location-page__address-text">
          121 E Main St<br />
          Binger, OK 73009
        </p>
        <p className="location-page__phone">
          <a href="tel:+14056562726">(405) 656-2726</a>
        </p>
        <p className="location-page__highway">
          Located on <strong>Highway 152</strong>—a convenient stop for locals and through traffic.
        </p>
      </section>
      <section className="location-page__drive-thru" aria-labelledby="drive-thru-heading">
        <h2 id="drive-thru-heading">Drive-Thru</h2>
        <p className="location-page__drive-thru-text">
          We are a drive-thru. Pull up for hot food, pizza, drinks, and
          convenience items without leaving your vehicle.
        </p>
      </section>
      <section className="location-page__map" aria-labelledby="map-heading">
        <h2 id="map-heading">Map</h2>
        <div className="location-page__map-wrap">
          <iframe
            src="https://www.google.com/maps?q=121+E+Main+St,+Binger,+OK+73009&z=15&output=embed"
            title="Map showing Binger Drive Thru at 121 E Main St, Binger, OK 73009"
            className="location-page__map-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="location-page__map-link">
          <a href="https://www.google.com/maps/dir/?api=1&destination=121+E+Main+St,+Binger,+OK+73009" target="_blank" rel="noopener noreferrer">
            Get directions in Google Maps
          </a>
        </p>
      </section>
    </div>
  )
}
