import Review from '../models/Review.js'

async function getReviews(_request, response) {
  const reviews = await Review.find({ isPublished: true }).sort({ createdAt: -1 }).lean()
  response.json({ status: 'ok', count: reviews.length, data: reviews })
}

export default getReviews
