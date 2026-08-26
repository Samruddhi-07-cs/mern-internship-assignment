function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark" aria-hidden="true">अ</span><span className="brand-copy"><strong>आपलं स्वाद</strong><small>Aapla Swaad</small></span></a><p>Traditional Maharashtrian food,<br />made with a little more heart.</p></div>
        <div className="footer-column"><strong>Explore</strong><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#gallery">Gallery</a></div>
        <div className="footer-column"><strong>Visit</strong><a href="#location">Find us</a><a href="#contact">Contact</a><a href="#reviews">Reviews</a></div>
        <a className="footer-top" href="#home" aria-label="Back to top">↑<small>Back to top</small></a>
      </div>
      <div className="container footer-bottom"><span>© 2026 Aapla Swaad</span><span>Made for slow meals and good company.</span></div>
    </footer>
  )
}

export default Footer
