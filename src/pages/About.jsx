export default function About() {
  return (
    <div className="about-page">
      <header className="about-page__header">
        <h1 className="about-page__title">About Us</h1>
      </header>
      <section className="about-page__content" aria-labelledby="about-heading">
        <h2 id="about-heading" className="visually-hidden">Our story</h2>
        <p className="about-page__lead">
          Binger Drive Thru is family-owned and operated. We are part of the
          Binger community and here for the long run.
        </p>
        <p className="about-page__text">
          We run a practical, honest business: hot food, pizza, drinks, and
          convenience items for our neighbors and for travelers on Highway 152.
          No fuss—just a reliable stop when you need it.
        </p>
      </section>
    </div>
  )
}
