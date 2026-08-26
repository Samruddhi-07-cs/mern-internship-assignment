import { useEffect, useState } from 'react'
import heroSlides from '../data/heroSlides.js'

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const slide = heroSlides[currentSlide]

  useEffect(() => {
    if (isPaused || heroSlides.length < 2) return undefined
    const interval = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroSlides.length)
    }, 4000)
    return () => window.clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    const nextSlide = heroSlides[(currentSlide + 1) % heroSlides.length]
    const nextBackground = new Image()
    const nextForeground = new Image()
    nextBackground.src = nextSlide.background
    nextForeground.src = nextSlide.foreground
    return () => {
      nextBackground.onload = null
      nextForeground.onload = null
    }
  }, [currentSlide])

  const chooseSlide = (index) => setCurrentSlide(index)
  const scrollToNextSection = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="home" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="hero-background-slideshow" aria-hidden="true">
        {heroSlides.map((item, index) => <img className={`hero-background-slide${index === currentSlide ? ' is-active' : ''}`} key={item.background} src={item.background} alt="" />)}
      </div>
      <div className="hero-background-overlay" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid container">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span /> घरची चव, मनापासून</p>
          <h1>चवीची आठवण,<br /><em>आपलं स्वाद.</em></h1>
          <p className="hero-description">
            Authentic Maharashtrian flavours, served warm with the comfort of a meal made at home.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#menu">View menu <span aria-hidden="true">→</span></a>
            <a className="button button-quiet" href="https://maps.google.com/?q=Pune,Maharashtra" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-proof" aria-label="Customer rating: 4.7 out of 5 from 320 reviews">
            <div className="rating-stars" aria-hidden="true">★★★★★</div>
            <strong>4.7 / 5</strong>
            <span>320+ reviews</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            {heroSlides.map((item, index) => <img className={`hero-foreground-slide${index === currentSlide ? ' is-active' : ''}`} key={item.label} src={item.foreground} alt={index === currentSlide ? item.alt : ''} aria-hidden={index !== currentSlide} />)}
          </div>
          <div className="hero-stamp" aria-hidden="true"><span>100%</span><small>Ghar jaisi<br />chav</small></div>
          <div className="hero-caption"><span /> {slide.label}</div>
        </div>
      </div>
      <div className="hero-controls" aria-label="Hero food photography controls">
        <button type="button" className="hero-arrow hero-prev" aria-label="Previous slide" onClick={() => chooseSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}>←</button>
        <span className="hero-control-divider" aria-hidden="true" />
        <button className="hero-scroll-label" type="button" aria-label="Scroll to discover" onClick={scrollToNextSection}><span className="scroll-label-desktop">Scroll to discover</span><span className="scroll-label-mobile">Swipe to explore</span></button>
        <div className="hero-indicators">
          {heroSlides.map((item, index) => <button type="button" className={`hero-indicator${index === currentSlide ? ' is-active' : ''}`} key={item.label} aria-label={`Show slide ${index + 1}`} aria-pressed={index === currentSlide} onClick={() => chooseSlide(index)} />)}
        </div>
        <button type="button" className="hero-arrow hero-next" aria-label="Next slide" onClick={() => chooseSlide((currentSlide + 1) % heroSlides.length)}>→</button>
      </div>
    </section>
  )
}

export default Hero
