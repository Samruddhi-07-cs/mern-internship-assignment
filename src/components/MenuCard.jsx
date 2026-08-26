function MenuCard({ item, onAddToOrder }) {
  return (
    <article className="menu-card">
      <div className="menu-card-image">
        <img src={item.image} alt={item.englishName} loading="lazy" />
        {item.bestseller && <span className="bestseller-badge">Bestseller</span>}
        <span className="menu-category">{item.category}</span>
      </div>
      <div className="menu-card-body">
        <div className="menu-card-heading">
          <div>
            <h3>{item.name}</h3>
            <p>{item.englishName}</p>
          </div>
          <strong>₹{item.price}</strong>
        </div>
        <p className="menu-description">{item.description}</p>
        <button className="add-button" type="button" aria-label={`Add ${item.englishName} to order`} onClick={() => onAddToOrder(item)}>
          <span aria-hidden="true">+</span> Add to order
        </button>
      </div>
    </article>
  )
}

export default MenuCard
