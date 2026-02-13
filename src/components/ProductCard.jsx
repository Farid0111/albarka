import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { getStrikethroughPrice } from '../utils/price'
import LazyImage from './LazyImage'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const {
    id,
    name = product?.nom ?? 'Sans nom',
    description = product?.desc ?? '',
    price = 0,
    emoji = '📦',
    image = product?.imageUrl ?? product?.image ?? product?.photo,
  } = product ?? {}
  const priceBarré = getStrikethroughPrice(price)

  return (
    <article className="product-card">
      <Link to={`/produits/${id}`} className="product-card-link">
        <div className="product-image">
          {image ? (
            <LazyImage src={image} alt={name} />
          ) : (
            emoji
          )}
        </div>
        <h3 className="product-card-name">{name}</h3>
        {description && (
          <p className="product-card-description">{description}</p>
        )}
        <p className="product-price">
          <span className="price-strike">{priceBarré} FCFA</span>
          <span className="price-current">{price} FCFA</span>
        </p>
      </Link>
      <button
        type="button"
        className="btn btn-small"
        onClick={() => addToCart(id)}
      >
        Ajouter au panier
      </button>
    </article>
  )
}

export default memo(ProductCard)
