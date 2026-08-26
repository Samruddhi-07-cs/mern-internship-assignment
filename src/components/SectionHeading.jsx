function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow section-eyebrow"><span /> {eyebrow}</p>
        <h2>{title} <em>{highlight}</em></h2>
      </div>
      {description && <p className="section-intro">{description}</p>}
    </div>
  )
}

export default SectionHeading
