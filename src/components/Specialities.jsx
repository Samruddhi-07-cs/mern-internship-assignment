import { useEffect, useState } from 'react'
import { getMenuItems } from '../data/api.js'
import menuItems from '../data/menuData.js'
import MenuCard from './MenuCard.jsx'

function Specialities() {
  const [items, setItems] = useState(menuItems)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    getMenuItems()
      .then((payload) => {
        if (isMounted && payload.data.length) setItems(payload.data)
      })
      .catch(() => {})
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

    return () => { isMounted = false }
  }, [])

  return (
    <section className="specialities" id="menu">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-eyebrow"><span /> आमच्या खासियत</p>
            <h2>थाळीतली <em>आपुलकी.</em></h2>
          </div>
          <p className="section-intro">Recipes passed down, ingredients chosen with care, and a little extra love in every serving.</p>
        </div>
        <div className="menu-grid" aria-busy={isLoading}>
          {items.map((item) => <MenuCard key={item._id || item.englishName} item={item} />)}
        </div>
        <a className="menu-link" href="#contact">View the full menu <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}

export default Specialities
