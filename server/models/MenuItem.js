import mongoose from 'mongoose'

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  englishName: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  bestseller: { type: Boolean, default: false },
  isAvailable: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 0 },
}, { timestamps: true })

const MenuItem = mongoose.models.MenuItem || mongoose.model('MenuItem', menuItemSchema)

export default MenuItem
