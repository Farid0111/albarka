import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const {
    id,
    name = product?.nom ?? 'Sans nom',
    description = product?.desc ?? '',
    price = 0,
    emoji = '📦',
    image = product?.imageUrl ?? product?.image ?? product?.photo,
  } = product ?? {}

  return (
    <article className="product-card">
      <Link to={`/produits/${id}`} className="product-card-link">
        <div className="product-image">
          {image ? (
            <img src={image} alt={name} loading="lazy" />
          ) : (
            emoji
          )}
        </div>
        <h3 className="product-card-name">{name}</h3>
        {description && (
          <p className="product-card-description">{description}</p>
        )}
        <p className="product-price">{price} FCFA</p>
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
