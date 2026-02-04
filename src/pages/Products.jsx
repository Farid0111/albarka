import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const { products, loading, error, refetch } = useProducts()
  const location = useLocation()

  useEffect(() => {
    refetch()
  }, [refetch])

  // Afficher la page depuis le haut à chaque visite (catalogue et images visibles)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <main style={{ flex: 1 }}>
      <section className="page-title">
        <h1>Catalogue thés</h1>
        <p>Choisissez vos thés et infusions, ajoutez-les au panier.</p>
      </section>

      <section className="products-section">
        {loading && <p className="products-loading">Chargement des produits…</p>}
        {error && <p className="products-error">{error}</p>}
        {!loading && !error && (
          <div className="product-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
