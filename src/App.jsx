import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingFallback from './components/LoadingFallback'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load les pages pour meilleures performances
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))

export default function App() {
  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<Products />} />
            <Route path="/produits/:id" element={<ProductDetail />} />
            <Route path="/panier" element={<Cart />} />
            <Route path="/commander" element={<Checkout />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
