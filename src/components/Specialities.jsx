import { useEffect, useState } from 'react'
import { getMenuItems } from '../data/api.js'
import menuItems from '../data/menuData.js'
import MenuCard from './MenuCard.jsx'
import SectionHeading from './SectionHeading.jsx'
import DecorativeFoodImages from './DecorativeFoodImages.jsx'
import IllustratedBackdrop from './IllustratedBackdrop.jsx'

const specialityFoodImages = [
  { image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=70', position: 'food-section-right', size: '130px', shape: 'food-circle', opacity: .1, rotation: 12 },
]

function Specialities({ onAddToOrder }) {
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
      <IllustratedBackdrop variant="menu" asset="thali" />
      <DecorativeFoodImages images={specialityFoodImages} />
      <div className="container">
        <SectionHeading
          eyebrow="आमच्या खासियत"
          title="थाळीतली"
          highlight="आपुलकी."
          description="Recipes passed down, ingredients chosen with care, and a little extra love in every serving."
        />
        <div className="menu-grid" aria-busy={isLoading}>
          {items.map((item) => <MenuCard key={item._id || item.englishName} item={item} onAddToOrder={onAddToOrder} />)}
        </div>
        <a className="menu-link" href="#contact">View the full menu <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}

export default Specialities
