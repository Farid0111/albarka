import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { cartCount } = useCart()

  return (
    <header className="header">
      <Link to="/" className="logo">
        <span className="logo-icon" aria-hidden>🍵</span>
        <span>Thés Santé</span>
      </Link>
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/produits">Thés</Link>
        <Link to="/panier" className="cart-link">
          Panier ({cartCount})
        </Link>
      </nav>
    </header>
  )
}
