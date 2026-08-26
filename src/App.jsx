import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Specialities from './components/Specialities.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Reviews from './components/Reviews.jsx'
import Gallery from './components/Gallery.jsx'
import Location from './components/Location.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Reveal from './components/Reveal.jsx'
import OrderPanel from './components/OrderPanel.jsx'

function App() {
  const [cart, setCart] = useState([])
  const [isOrderOpen, setIsOrderOpen] = useState(false)
  const [orderMessage, setOrderMessage] = useState('')

  const handleAddToOrder = (item) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => (cartItem._id || cartItem.englishName) === (item._id || item.englishName))
      if (existingItem) return currentCart.map((cartItem) => cartItem === existingItem ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
      return [...currentCart, { ...item, id: item._id || item.englishName, quantity: 1 }]
    })
    setOrderMessage(`${item.englishName || item.name} added to your order.`)
    setIsOrderOpen(true)
  }

  const updateQuantity = (item, amount) => {
    setCart((currentCart) => currentCart.flatMap((cartItem) => {
      if (cartItem.id !== item.id) return [cartItem]
      const quantity = cartItem.quantity + amount
      return quantity > 0 ? [{ ...cartItem, quantity }] : []
    }))
  }

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <Navbar />
      <OrderPanel cart={cart} totalQuantity={totalQuantity} isOpen={isOrderOpen} onToggle={() => setIsOrderOpen((open) => !open)} onIncrease={(item) => updateQuantity(item, 1)} onDecrease={(id) => updateQuantity({ id }, -1)} onPlaceOrder={() => { setOrderMessage('Your order has been prepared successfully.'); setCart([]) }} />
      <main>
        <Hero />
        <Reveal><Specialities onAddToOrder={handleAddToOrder} /></Reveal>
        <Reveal delay={80}><WhyChooseUs /></Reveal>
        <Reveal><Reviews /></Reveal>
        <Reveal delay={80}><Gallery /></Reveal>
        <Reveal><Location /></Reveal>
        <Reveal delay={80}><Contact /></Reveal>
      </main>
      <Footer />
      <ScrollToTop />
      {orderMessage && <div className="order-toast" role="status" onClick={() => setOrderMessage('')}>{orderMessage}</div>}
    </>
  )
}

export default App
