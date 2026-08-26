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

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal><Specialities /></Reveal>
        <Reveal delay={80}><WhyChooseUs /></Reveal>
        <Reveal><Reviews /></Reveal>
        <Reveal delay={80}><Gallery /></Reveal>
        <Reveal><Location /></Reveal>
        <Reveal delay={80}><Contact /></Reveal>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
