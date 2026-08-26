import FeatureCard from './FeatureCard.jsx'

const features = [
  { icon: '✦', title: 'Authentic taste', description: 'Recipes rooted in the warmth and boldness of Maharashtra.' },
  { icon: '❋', title: 'Fresh ingredients', description: 'Seasonal produce and hand-ground spices, prepared daily.' },
  { icon: '⌂', title: 'Hygienic & clean', description: 'A thoughtful kitchen that keeps care in every detail.' },
  { icon: '♡', title: 'Loved by everyone', description: 'Generous portions and flavours that bring people together.' },
]

function WhyChooseUs() {
  return (
    <section className="why-us" id="story">
      <div className="container">
        <div className="why-intro">
          <div>
            <p className="eyebrow why-eyebrow"><span /> का आपलं स्वाद?</p>
            <h2>जेवण नाही,<br /><em>एक भावना.</em></h2>
          </div>
          <p>We believe the best meals are unhurried. That is why our kitchen keeps things honest, local and full of the flavours that feel like home.</p>
        </div>
        <div className="features-grid">
          {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
