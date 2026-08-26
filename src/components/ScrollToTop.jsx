import { useEffect, useState } from 'react'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isVisible ? <a className="scroll-top" href="#home" aria-label="Scroll back to top">↑</a> : null
}

export default ScrollToTop
