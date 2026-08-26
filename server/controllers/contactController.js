import ContactMessage from '../models/ContactMessage.js'

async function createContactMessage(request, response) {
  const { name, email, phone, message } = request.body
  if (!name || !email || !message) {
    return response.status(400).json({ status: 'error', message: 'Name, email, and message are required.' })
  }

  const contactMessage = await ContactMessage.create({ name, email, phone, message })
  return response.status(201).json({
    status: 'ok',
    message: 'Your message has been received.',
    data: { id: contactMessage.id },
  })
}

export default createContactMessage
