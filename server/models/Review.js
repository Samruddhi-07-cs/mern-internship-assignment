import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  quote: { type: String, required: true, trim: true },
  text: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  detail: { type: String, required: true, trim: true },
  rating: { type: Number, required: true, min: 1, max: 5, default: 5 },
  isPublished: { type: Boolean, default: true },
}, { timestamps: true })

const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema)

export default Review
