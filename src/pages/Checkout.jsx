import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import { useCart } from '../context/CartContext'
import { addOrder } from '../services/firestore'
import { getStrikethroughPrice } from '../utils/price'

const INITIAL_FORM = {
  name: '',
  phone: '',
  address: '',
}

export default function Checkout() {
  const navigate = useNavigate()
  const { getProductById } = useProducts()
  const { cart, clearCart } = useCart()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [orderSent, setOrderSent] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const ids = Object.keys(cart)
  const items = ids
    .map((id) => {
      const product = getProductById(id)
      if (!product) return null
      const qty = cart[id]
      const unitPrice = product.price
      const priceBarré = getStrikethroughPrice(product.price)
      return { ...product, qty, unitPrice, priceBarré, subtotal: unitPrice * qty }
    })
    .filter(Boolean)
  const total = items.reduce((s, i) => s + i.subtotal, 0)
  const isEmpty = items.length === 0

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: null }))
  }

  const validate = () => {
    const e = {}
    if (!form.name?.trim()) e.name = 'Obligatoire'
    if (!form.phone?.trim()) e.phone = 'Obligatoire'
    if (!form.address?.trim()) e.address = 'Obligatoire'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isEmpty || !validate()) return
    setSubmitError(null)
    try {
      await addOrder({
        name: form.name,
        phone: form.phone,
        address: form.address,
        items: items.map((i) => ({
          id: i.id,
          name: i.name,
          emoji: i.emoji,
          qty: i.qty,
          price: i.unitPrice,
          subtotal: i.subtotal,
        })),
        total,
      })
      setOrderSent(true)
      clearCart()
      setTimeout(() => navigate('/'), 4000)
    } catch (err) {
      setSubmitError(err.message || 'Erreur lors de l\'enregistrement de la commande.')
    }
  }

  if (isEmpty && !orderSent) {
    return (
      <main style={{ flex: 1 }}>
        <section className="page-title">
          <h1>Commander</h1>
          <p className="cart-empty">Votre panier est vide.</p>
        </section>
        <section className="checkout-section" style={{ textAlign: 'center' }}>
          <Link to="/produits" className="btn btn-primary">Voir les produits</Link>
        </section>
      </main>
    )
  }

  if (orderSent) {
    return (
      <main style={{ flex: 1 }}>
        <section className="page-title checkout-success">
          <h1>Commande enregistrée</h1>
          <p>Merci ! Nous vous contacterons pour confirmer la livraison. Vous réglerez le montant à la livraison.</p>
          <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
        </section>
      </main>
    )
  }

  return (
    <main style={{ flex: 1 }}>
      <section className="page-title">
        <h1>Finaliser la commande</h1>
        <p className="text-muted">Paiement à la livraison — Renseignez vos coordonnées de livraison.</p>
      </section>

      <section className="checkout-section">
        <div className="checkout-notice">
          <strong>Paiement à la livraison</strong>
          <p>Vous réglerez le montant de votre commande en espèces à la livraison. Aucun paiement en ligne.</p>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Nom complet *
            <input
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="Votre nom"
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </label>
          <label>
            Téléphone *
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder="96 12 34 56"
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </label>
          <label>
            Adresse de livraison *
            <input
              type="text"
              value={form.address}
              onChange={(e) => update('address', e.target.value)}
              placeholder="Quartier, rue, ville"
              className={errors.address ? 'input-error' : ''}
            />
            {errors.address && <span className="field-error">{errors.address}</span>}
          </label>

          <div className="checkout-recap">
            <h3>Récapitulatif</h3>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.emoji} {item.name} × {item.qty} — <span className="price-strike">{item.priceBarré * item.qty} FCFA</span> <span className="price-current">{item.subtotal} FCFA</span>
                </li>
              ))}
            </ul>
            <p className="checkout-total"><strong>Total : <span className="price-current">{total} FCFA</span></strong></p>
            <p className="checkout-payment-note">À régler à la livraison.</p>
          </div>

          {submitError && <p className="field-error">{submitError}</p>}
          <button type="submit" className="btn btn-primary btn-block">
            Confirmer la commande
          </button>
        </form>
      </section>
    </main>
  )
}
