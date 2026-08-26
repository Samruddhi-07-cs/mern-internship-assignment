import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ totalQuantity, isOrderOpen, onOrderToggle }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Aapla Swaad home">
          <span className="brand-mark" aria-hidden="true">अ</span>
          <span className="brand-copy">
            <strong>आपलं स्वाद</strong>
            <small>Aapla Swaad</small>
          </span>
        </a>

        <button
          className={`menu-toggle${isOpen ? ' is-open' : ''}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="site-menu" className={`nav-menu${isOpen ? ' is-open' : ''}`}>
          <div className="nav-links">
            {links.map((link) => (
              <a className={link.href === '#home' ? 'is-active' : ''} key={link.href} href={link.href} onClick={closeMenu} aria-current={link.href === '#home' ? 'page' : undefined}>{link.label}</a>
            ))}
          </div>
          <button className="order-toggle navbar-order-toggle" type="button" aria-expanded={isOrderOpen} aria-controls="order-panel" onClick={onOrderToggle}>
            <span aria-hidden="true">◌</span> Order <strong>({totalQuantity})</strong>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
