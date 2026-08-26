function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid container">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span /> घरची चव, मनापासून</p>
          <h1>चवीची आठवण,<br /><em>आपलं स्वाद.</em></h1>
          <p className="hero-description">
            Authentic Maharashtrian flavours, served warm with the comfort of a meal made at home.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#menu">Explore our menu <span aria-hidden="true">→</span></a>
            <a className="button button-quiet" href="#story">Our story <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-proof" aria-label="Customer rating: 4.9 out of 5">
            <div className="rating-stars" aria-hidden="true">★★★★★</div>
            <div>
              <strong>4.9 / 5</strong>
              <span>Loved by 500+ foodies</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85"
              alt="A traditional Indian thali served with colourful curries"
            />
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>100%</span>
            <small>Ghar jaisi<br />chav</small>
          </div>
          <div className="hero-caption"><span /> Made fresh, every day</div>
        </div>
      </div>
      <a className="scroll-cue" href="#menu" aria-label="Scroll to menu"><span /> Scroll to discover</a>
    </section>
  )
}

export default Hero
