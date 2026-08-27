import { useState } from 'react'
import { sendContactMessage } from '../data/api.js'
import IllustratedBackdrop from './IllustratedBackdrop.jsx'

const contactLinks = [
  { label: 'Call us', value: '+91 98765 43210', href: 'tel:+919876543210', icon: '◉' },
  { label: 'WhatsApp', value: 'Chat with our team', href: 'https://wa.me/919876543210', icon: '◌' },
  { label: 'Instagram', value: '@aaplaswaad', href: 'https://instagram.com/', icon: '◎' },
  { label: 'Google reviews', value: 'Tell us what you think', href: 'https://www.google.com/search?q=Aapla+Swaad+restaurant', icon: 'G' },
]

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })
    try {
      const payload = await sendContactMessage(formData)
      setFormStatus({ type: 'success', message: payload.message })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setFormStatus({ type: 'error', message: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <IllustratedBackdrop variant="contact" asset="leaves" />
      <div className="container">
        <div className="contact-heading"><p className="eyebrow section-eyebrow"><span /> बोलूया</p><h2>चव आली? <em>संपर्क करा.</em></h2></div>
        <div className="contact-grid">
          {contactLinks.map((link) => <a className="contact-item" key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}><span className="contact-icon" aria-hidden="true">{link.icon}</span><span><strong>{link.label}</strong><small>{link.value}</small></span><span className="contact-arrow" aria-hidden="true">↗</span></a>)}
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading"><h3>Send us a note</h3><p>Planning a visit or have a question? We would love to hear from you.</p></div>
          <div className="form-fields">
            <label>Name<input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required maxLength="80" /></label>
            <label>Email<input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required maxLength="160" /></label>
            <label>Phone <span>(optional)</span><input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" maxLength="25" /></label>
            <label className="message-field">Message<textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us how we can help" required maxLength="1000" rows="3" /></label>
          </div>
          <div className="form-actions"><button className="button button-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send message'} <span aria-hidden="true">→</span></button>{formStatus.message && <p className={`form-status ${formStatus.type}`} role="status">{formStatus.message}</p>}</div>
        </form>
      </div>
    </section>
  )
}

export default Contact
