import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { getProductById } = useProducts()
  const { cart, removeFromCart } = useCart()
  const ids = Object.keys(cart)
  const isEmpty = ids.length === 0

  const items = ids.map((id) => {
    const product = getProductById(id)
    if (!product) return null
    const qty = cart[id]
    return { ...product, qty, subtotal: product.price * qty }
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
              <span className="cart-item-qty">× {item.qty}</span>
              <span className="cart-item-price">{item.subtotal} FCFA</span>
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
