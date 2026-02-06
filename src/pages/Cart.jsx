import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import { useCart } from '../context/CartContext'
import { getStrikethroughPrice } from '../utils/price'

export default function Cart() {
  const { getProductById } = useProducts()
  const { cart, setCartQuantity, removeFromCart } = useCart()
  const ids = Object.keys(cart)
  const isEmpty = ids.length === 0

  const items = ids.map((id) => {
    const product = getProductById(id)
    if (!product) return null
    const qty = cart[id]
    const unitPrice = product.price
    const priceBarré = getStrikethroughPrice(product.price)
    return { ...product, qty, unitPrice, priceBarré, subtotal: unitPrice * qty }
  }).filter(Boolean)

  const total = items.reduce((s, i) => s + i.subtotal, 0)

  if (isEmpty) {
    return (
      <main style={{ flex: 1 }}>
        <section className="page-title">
          <h1>Votre panier</h1>
          <p className="cart-empty">Votre panier est vide.</p>
        </section>
        <section className="cart-section" style={{ textAlign: 'center' }}>
          <Link to="/produits" className="btn btn-primary">
            Voir les produits
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main style={{ flex: 1 }}>
      <section className="page-title">
        <h1>Votre panier</h1>
      </section>

      <section className="cart-section">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-row">
              <span className="cart-item-name">
                {item.emoji || '📦'} {item.name}
              </span>
              <div className="cart-item-qty-selector">
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => setCartQuantity(item.id, item.qty - 1)}
                  aria-label="Diminuer"
                >
                  −
                </button>
                <span className="cart-item-qty-num">{item.qty}</span>
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => setCartQuantity(item.id, item.qty + 1)}
                  aria-label="Augmenter"
                >
                  +
                </button>
              </div>
              <span className="cart-item-price">
                <span className="price-strike">{item.priceBarré * item.qty} FCFA</span>
                <span className="price-current">{item.subtotal} FCFA</span>
              </span>
              <button
                type="button"
                className="btn btn-small btn-ghost"
                onClick={() => removeFromCart(item.id)}
              >
                Retirer
              </button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <p>
            <strong>Total :</strong> <span id="cart-total">{total}</span> FCFA
          </p>
          <Link to="/commander" className="btn btn-primary">
            Passer la commande
          </Link>
        </div>
      </section>
    </main>
  )
}
