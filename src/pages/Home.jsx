import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const { products, loading, error } = useProducts()
  const featured = products.slice(0, 4)

  return (
    <main style={{ flex: 1 }}>
      <section className="hero">
        <h1>Thés pour la santé</h1>
        <p className="hero-text">
          Découvrez nos thés et infusions bien-être. Digestion, sommeil, immunité et énergie au naturel.
        </p>
        <div className="hero-actions">
          <Link to="/produits" className="btn btn-primary">
            Voir les thés
          </Link>
          <a href="#comment" className="btn btn-secondary">
            Comment ça marche
          </a>
        </div>
      </section>

      <section className="products-preview">
        <h2>Thés à la une</h2>
        {loading && <p className="products-loading">Chargement des produits…</p>}
        {error && <p className="products-error">{error}</p>}
        {!loading && !error && (
          <>
            <div className="product-grid">
              {featured.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <div className="section-actions">
              <Link to="/produits" className="btn btn-outline">
                Voir tout le catalogue
              </Link>
            </div>
          </>
        )}
      </section>

      <section className="how-it-works" id="comment">
        <h2>Comment ça marche ?</h2>
        <div className="how-it-works-banners">
          <div className="how-it-works-banner">
            <span className="how-it-works-banner-logo" aria-hidden>🍵</span>
            1. Choisissez
          </div>
          <div className="how-it-works-banner">
            <span className="how-it-works-banner-logo" aria-hidden>🛒</span>
            2. Commander
          </div>
          <div className="how-it-works-banner">
            <span className="how-it-works-banner-logo" aria-hidden>🚚</span>
            3. Livraison
          </div>
        </div>
      </section>
    </main>
  )
}
