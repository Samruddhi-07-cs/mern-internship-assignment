import { useEffect, useState } from 'react'
import { getReviews } from '../data/api.js'
import reviews from '../data/reviewsData.js'
import ReviewCard from './ReviewCard.jsx'
import DecorativeFoodImages from './DecorativeFoodImages.jsx'
import IllustratedBackdrop from './IllustratedBackdrop.jsx'

const reviewFoodImages = [
  { image: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=400&q=70', position: 'food-review-corner', size: '155px', shape: 'food-circle', opacity: .07, rotation: 18 },
]

function Reviews() {
  const [reviewItems, setReviewItems] = useState(reviews)

  useEffect(() => {
    let isMounted = true
    getReviews()
      .then((payload) => {
        if (isMounted && payload.data.length) setReviewItems(payload.data)
      })
      .catch(() => {})

    return () => { isMounted = false }
  }, [])

  return (
    <section className="reviews" id="reviews">
      <IllustratedBackdrop variant="reviews" asset="people" />
      <DecorativeFoodImages images={reviewFoodImages} />
      <div className="container">
        <div className="section-heading reviews-heading">
          <div>
            <p className="eyebrow section-eyebrow"><span /> लोक काय म्हणतात</p>
            <h2>चव जी <em>बोलते.</em></h2>
          </div>
          <a className="review-link" href="https://www.google.com/search?q=Aapla+Swaad+restaurant" target="_blank" rel="noreferrer">Read all reviews <span aria-hidden="true">↗</span></a>
        </div>
        <div className="reviews-grid">
          {reviewItems.map((review) => <ReviewCard key={review._id || review.name} review={review} />)}
        </div>
      </div>
    </section>
  )
}

export default Reviews
