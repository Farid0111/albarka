import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import { useCart } from '../context/CartContext'
import { addOrder, getProductReviewImages } from '../services/firestore'

const TIMER_SECONDS = 15 * 60 // 15 minutes

const INITIAL_ORDER_FORM = {
  name: '',
  phone: '',
  address: '',
}

function formatTimer(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

export default function ProductDetail() {
  const { id } = useParams()
  const { products, loading, getProductById } = useProducts()
  const product = getProductById(id)
  const { cart, addToCart, clearCart } = useCart()
  const [reviewImages, setReviewImages] = useState([])
  const [reviewImagesLoading, setReviewImagesLoading] = useState(true)
  const [timerSeconds, setTimerSeconds] = useState(TIMER_SECONDS)
  const [timerExpired, setTimerExpired] = useState(false)
  const toUrl = (item) =>
    typeof item === 'string' ? item : (item?.url ?? item?.imageUrl ?? item?.image ?? item?.src)
  const isUrl = (u) => u && typeof u === 'string'
  // Images réelles du produit : image, images[], imageUrl, etc.
  const productImageUrls = (() => {
    const raw = product?.image ?? product?.images ?? product?.imageUrl ?? product?.photo
    if (!raw) return []
    const arr = Array.isArray(raw) ? raw : [raw]
    return arr.map(toUrl).filter(isUrl)
  })()
  const mainProductImage = productImageUrls[0]
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [orderForm, setOrderForm] = useState(INITIAL_ORDER_FORM)
  const [orderErrors, setOrderErrors] = useState({})
  const [orderSent, setOrderSent] = useState(false)
  const [orderError, setOrderError] = useState(null)

  useEffect(() => {
    if (!product?.id) {
      setReviewImagesLoading(false)
      setReviewImages([])
      return
    }
    // Si le document produit a déjà un champ "reviews" (array), l'utiliser
    const directReviews = product.reviews
    if (Array.isArray(directReviews) && directReviews.length > 0) {
      const urls = directReviews.map(toUrl).filter(isUrl)
      setReviewImages(urls)
      setReviewImagesLoading(false)
      return
    }
    setReviewImagesLoading(true)
    getProductReviewImages(product.id)
      .then(setReviewImages)
      .catch(() => setReviewImages([]))
      .finally(() => setReviewImagesLoading(false))
  }, [product?.id, product?.reviews])

  useEffect(() => {
    if (!product || timerExpired) return
    const t = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          setTimerExpired(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [product?.id, timerExpired])

  if (loading && !product) {
    return (
      <main style={{ flex: 1 }} className="page-title">
        <p className="products-loading">Chargement du produit…</p>
      </main>
    )
  }
  if (!product) {
    return (
      <main style={{ flex: 1 }} className="page-title">
        <h1>Produit introuvable</h1>
        <Link to="/produits" className="btn btn-primary">Retour au catalogue</Link>
      </main>
    )
  }

  const handlePay = () => {
    addToCart(product.id)
    setShowOrderForm(true)
  }

  const updateOrderForm = (field, value) => {
    setOrderForm((f) => ({ ...f, [field]: value }))
    if (orderErrors[field]) setOrderErrors((e) => ({ ...e, [field]: null }))
  }

  const validateOrderForm = () => {
    const e = {}
    if (!orderForm.name?.trim()) e.name = 'Obligatoire'
    if (!orderForm.phone?.trim()) e.phone = 'Obligatoire'
    if (!orderForm.address?.trim()) e.address = 'Obligatoire'
    setOrderErrors(e)
    return Object.keys(e).length === 0
  }

  const handleOrderSubmit = async (e) => {
    e.preventDefault()
    if (!validateOrderForm()) return
    setOrderError(null)
    const qty = cart[product.id] || 1
    const items = [{ id: product.id, name: product.name, emoji: product.emoji, qty, price: product.price, subtotal: product.price * qty }]
    try {
      await addOrder({
        name: orderForm.name,
        phone: orderForm.phone,
        address: orderForm.address,
        items,
        total: product.price * qty,
      })
      setOrderSent(true)
      clearCart()
    } catch (err) {
      setOrderError(err.message || 'Erreur lors de l\'enregistrement.')
    }
  }

  const cartQty = cart[product.id] || 0
  const total = product.price * (showOrderForm ? cartQty : 1)

  return (
    <main style={{ flex: 1 }}>
      <section className="product-detail">
        <div className="product-detail-main">
          <div className="product-detail-image-wrap">
            <div className="product-detail-image">
              {mainProductImage ? (
                <>
                  <img
                    src={mainProductImage}
                    alt={product.name}
                    className="product-detail-image-img"
                  />
                  {productImageUrls.length > 1 && (
                    <div className="product-detail-image-thumbnails">
                      {productImageUrls.map((url, i) => (
                        <img
                          key={`${url}-${i}`}
                          src={url}
                          alt={`${product.name} ${i + 1}`}
                          className="product-detail-thumb"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <span className="product-detail-emoji">{product.emoji || '📦'}</span>
              )}
            </div>
          </div>
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="product-detail-price">{product.price} FCFA</p>
            <div className="product-detail-pay">
              {!timerExpired ? (
                <>
                  <p className="product-detail-timer">
                    Offre valable encore <span className="timer-value">{formatTimer(timerSeconds)}</span>
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-pay"
                    onClick={handlePay}
                  >
                    Commander — {product.price} FCFA
                  </button>
                </>
              ) : (
                <p className="product-detail-timer-expired">Le délai pour cette offre est écoulé. Ajoutez au panier pour commander.</p>
              )}
            </div>
            {/* Formulaire commande avec animation */}
            {showOrderForm && (
              <div className="product-order-form-wrap">
                <div className="checkout-notice">
                  <strong>Paiement à la livraison</strong>
                  <p>Vous réglerez le montant en espèces à la livraison.</p>
                </div>
                <form className="checkout-form product-order-form" onSubmit={handleOrderSubmit}>
                  <label>
                    Nom complet *
                    <input
                      type="text"
                      value={orderForm.name}
                      onChange={(e) => updateOrderForm('name', e.target.value)}
                      placeholder="Votre nom"
                      className={orderErrors.name ? 'input-error' : ''}
                    />
                    {orderErrors.name && <span className="field-error">{orderErrors.name}</span>}
                  </label>
                  <label>
                    Téléphone *
                    <input
                      type="tel"
                      value={orderForm.phone}
                      onChange={(e) => updateOrderForm('phone', e.target.value)}
                      placeholder="96 12 34 56"
                      className={orderErrors.phone ? 'input-error' : ''}
                    />
                    {orderErrors.phone && <span className="field-error">{orderErrors.phone}</span>}
                  </label>
                  <label>
                    Adresse de livraison *
                    <input
                      type="text"
                      value={orderForm.address}
                      onChange={(e) => updateOrderForm('address', e.target.value)}
                      placeholder="Quartier, rue, ville"
                      className={orderErrors.address ? 'input-error' : ''}
                    />
                    {orderErrors.address && <span className="field-error">{orderErrors.address}</span>}
                  </label>
                  <div className="checkout-recap">
                    <p className="checkout-total"><strong>Total : {total} FCFA</strong> — À régler à la livraison.</p>
                  </div>
                  {orderError && <p className="field-error">{orderError}</p>}
                  <button type="submit" className="btn btn-primary btn-block">
                    {orderSent ? 'Commande enregistrée !' : 'Confirmer la commande'}
                  </button>
                </form>
              </div>
            )}

            {orderSent && (
              <div className="product-order-success">
                <p><strong>Merci !</strong> Nous vous contacterons pour confirmer la livraison.</p>
                <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
              </div>
            )}
          </div>
        </div>

        {product.description && (
          <p className="product-detail-desc product-detail-desc-below">{product.description}</p>
        )}

        {/* Détails produit / fiche produit — entre image et avis */}
        {product.longDescription && (
          <section className="product-long-description" id="fiche-produit">
            <h2>Détails produit</h2>
            {product.longDescription.intro && (
              <p className="product-desc-intro">{product.longDescription.intro}</p>
            )}
            {product.longDescription.description && (
              <div className="product-desc-block">
                <h3>Présentation</h3>
                <p>{product.longDescription.description}</p>
              </div>
            )}
            {product.longDescription.ingredients && (
              <div className="product-desc-block">
                <h3>Ingrédients</h3>
                <p>{product.longDescription.ingredients}</p>
              </div>
            )}
            {product.longDescription.preparation && (
              <div className="product-desc-block">
                <h3>Préparation / Mode d'emploi</h3>
                <p>{product.longDescription.preparation}</p>
              </div>
            )}
            {product.longDescription.benefits && product.longDescription.benefits.length > 0 && (
              <div className="product-desc-block">
                <h3>Bienfaits</h3>
                <ul>
                  {product.longDescription.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.longDescription.storage && (
              <div className="product-desc-block">
                <h3>Conservation</h3>
                <p>{product.longDescription.storage}</p>
              </div>
            )}
            {product.longDescription.format && (
              <div className="product-desc-block product-desc-format">
                <h3>Contenu</h3>
                <p>{product.longDescription.format}</p>
              </div>
            )}
          </section>
        )}

        {/* Avis des utilisateurs — grand format comme référence */}
        <section className="product-reviews product-reviews-large" id="avis-clients">
          <h2 className="product-reviews-title">Avis des utilisateurs</h2>
          <p className="product-reviews-subtitle">
            Ce que disent les clients sur ce produit.
          </p>
          {reviewImagesLoading ? (
            <p className="review-images-loading">Chargement des avis…</p>
          ) : reviewImages.length === 0 ? (
            <p className="no-reviews">Aucun avis en image pour ce produit.</p>
          ) : (
            <div className="review-images-gallery review-images-gallery-large" aria-label="Avis des utilisateurs en images">
              {reviewImages.map((url, index) => (
                <article key={`${url}-${index}`} className="review-image-card">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-image-link-large"
                  >
                    <img
                      src={url}
                      alt={`Avis client ${index + 1}`}
                      className="review-image-large"
                      loading="lazy"
                    />
                  </a>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  )
}
