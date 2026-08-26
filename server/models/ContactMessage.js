import mongoose from 'mongoose'

const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 80 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
  phone: { type: String, trim: true, maxlength: 25 },
  message: { type: String, required: true, trim: true, maxlength: 1000 },
  status: { type: String, enum: ['new', 'read', 'replied'], default: 'new' },
}, { timestamps: true })

const ContactMessage = mongoose.models.ContactMessage || mongoose.model('ContactMessage', contactMessageSchema)

export default ContactMessage
