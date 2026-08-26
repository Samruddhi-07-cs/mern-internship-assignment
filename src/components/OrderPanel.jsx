function OrderPanel({ cart, totalQuantity, isOpen, onToggle, onIncrease, onDecrease, onPlaceOrder, showToggle = true }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      {showToggle && <button className="order-toggle" type="button" aria-expanded={isOpen} aria-controls="order-panel" onClick={onToggle}>
        <span aria-hidden="true">◌</span> Order <strong>({totalQuantity})</strong>
      </button>}
      {isOpen && (
        <aside className="order-panel" id="order-panel" aria-label="Your order">
          <div className="order-panel-heading"><div><p className="eyebrow">Your order</p><h2>आजची ऑर्डर</h2></div><button type="button" className="order-close" aria-label="Close order" onClick={onToggle}>×</button></div>
          {cart.length === 0 ? <p className="order-empty">Your order is empty. Add a favourite from the menu.</p> : (
            <>
              <div className="order-items">
                {cart.map((item) => <div className="order-item" key={item.id}><div><strong>{item.englishName || item.name}</strong><small>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</small></div><div className="quantity-controls"><button type="button" aria-label={`Decrease ${item.englishName || item.name}`} onClick={() => onDecrease(item.id)}>−</button><span>{item.quantity}</span><button type="button" aria-label={`Increase ${item.englishName || item.name}`} onClick={() => onIncrease(item)}>+</button></div></div>)}
              </div>
              <div className="order-total"><span>Total</span><strong>₹{total}</strong></div>
              <button className="button button-primary order-place" type="button" onClick={onPlaceOrder}>Place order <span aria-hidden="true">→</span></button>
            </>
          )}
        </aside>
      )}
    </>
  )
}

export default OrderPanel
