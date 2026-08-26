import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
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
              <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
            ))}
          </div>
          <a className="nav-order" href="https://wa.me/919876543210" target="_blank" rel="noreferrer" onClick={closeMenu}>
            <span aria-hidden="true">↗</span> Order now
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
