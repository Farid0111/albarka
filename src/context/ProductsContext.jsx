import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { getProducts } from '../services/firestore'

const ProductsContext = createContext(null)

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const refetch = useCallback(() => {
    setLoading(true)
    setError(null)
    getProducts()
      .then((data) => setProducts(data || []))
      .catch((err) => {
        setError(err?.message || 'Erreur chargement des produits')
        setProducts([])
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    refetch()
  }, [refetch])

  useEffect(() => {
    const onVisible = () => refetch()
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', onVisible)
      return () => document.removeEventListener('visibilitychange', onVisible)
    }
  }, [refetch])

  const getProductById = (id) => {
    const sid = String(id)
    return products.find((p) => String(p.id) === sid) || null
  }

  return (
    <ProductsContext.Provider value={{ products, loading, error, getProductById, refetch }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const ctx = useContext(ProductsContext)
  if (!ctx) throw new Error('useProducts must be used within ProductsProvider')
  return ctx
}
