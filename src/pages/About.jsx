import ownersPhoto from '../assets/Owners.jpg'

export default function About() {
  return (
    <div className="about-page">
      <header className="about-page__header">
        <h1 className="about-page__title">About Us</h1>
      </header>

      <section className="about-page__owners" aria-labelledby="meet-owners-heading">
        <h2 id="meet-owners-heading" className="about-page__owners-title">Meet the Owners</h2>
        <div className="about-page__owners-layout">
          <div className="about-page__owners-image-wrap">
            <img
              src={ownersPhoto}
              alt="Mikka and Quinten Walsh, owners of Binger Drive Thru"
              className="about-page__owners-image"
              width="400"
              height="400"
            />
          </div>
          <div className="about-page__owners-content">
            <p className="about-page__owners-lead">
              Binger Drive Thru is family-owned and operated by Mikka and Quinten Walsh.
              Both Mikka and Quinten are from Binger and grew up stopping at this very drive thru — just like many others in the community. What started as a familiar local stop has become something they're proud to carry forward.
            </p>
            <p className="about-page__owners-text">
              Today, they focus on keeping Binger Drive Thru a reliable, welcoming place for locals and a convenient stop for travelers passing through on Highway 152. Whether you're grabbing hot food, pizza, drinks, or everyday essentials, their goal is simple: good service, quality food, and a smooth drive-thru experience every time.
            </p>
            <p className="about-page__owners-text">
              No shortcuts. No overcomplication. Just a dependable place to stop when you need it.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
