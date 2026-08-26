function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-topline"><span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span><span className="google-mark" aria-hidden="true">G</span></div>
      <blockquote>{review.quote}</blockquote>
      <p className="review-text">{review.text}</p>
      <footer>
        <span className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</span>
        <span><strong>{review.name}</strong><small>{review.detail}</small></span>
      </footer>
    </article>
  )
}

export default ReviewCard
