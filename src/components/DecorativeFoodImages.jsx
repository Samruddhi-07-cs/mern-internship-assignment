function DecorativeFoodImages({ images, label = 'Decorative food photography' }) {
  return (
    <div className="decorative-food" aria-label={label}>
      {images.map((item) => (
        <img
          key={`${item.image}-${item.position}`}
          className={`decorative-food-image ${item.position} ${item.shape || ''}`}
          src={item.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{ '--food-opacity': item.opacity ?? 0.18, '--food-size': item.size || '120px', '--food-rotation': `${item.rotation || 0}deg` }}
        />
      ))}
    </div>
  )
}

export default DecorativeFoodImages
