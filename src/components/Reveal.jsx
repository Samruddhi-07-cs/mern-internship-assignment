import { useEffect, useRef, useState } from 'react'

function Reveal({ children, delay = 0 }) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={elementRef} className={`reveal${isVisible ? ' is-visible' : ''}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>
}

export default Reveal
