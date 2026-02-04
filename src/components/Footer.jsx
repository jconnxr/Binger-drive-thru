export default function Footer() {
  return (
    <footer>
      <div className="footer__inner">
        <p className="footer__name">Binger Drive Thru</p>
        <div className="footer__info">
          <span className="footer__address">121 E Main St, Binger, OK 73009</span>
          <span className="footer__divider"> · </span>
          <a href="tel:+14056562726" className="footer__phone">(405) 656-2726</a>
        </div>
        <p className="footer__highway">Highway 152 · Online ordering coming soon.</p>
        <p className="footer__tagline">Family-owned. Here for Binger and the road.</p>
      </div>
    </footer>
  )
}
