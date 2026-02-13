import { useEffect, useState } from 'react'

/**
 * Hook pour optimiser les Core Web Vitals
 * - LCP: Largest Contentful Paint
 * - FID: First Input Delay
 * - CLS: Cumulative Layout Shift
 */
export function useWebVitals() {
  useEffect(() => {
    // Vérifier si Web Vitals est disponible
    if ('web-vital' in window) return

    // Observer pour LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          
          // Log LCP en développement
          if (process.env.NODE_ENV === 'development') {
            console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime)
          }
        })
        observer.observe({ type: 'largest-contentful-paint', buffered: true })
      } catch (e) {
        // L'API n'est pas supportée
      }
    }

    // Observer pour CLS (layout shifts)
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
              if (process.env.NODE_ENV === 'development') {
                console.log('CLS:', clsValue)
              }
            }
          }
        })
        observer.observe({ type: 'layout-shift', buffered: true })
      } catch (e) {
        // L'API n'est pas supportée
      }
    }

    // Optimiser les performances au runtime
    // Utiliser requestIdleCallback pour les tâches non-critiques
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Précharger les ressources non-critiques
        if ('link' in document) {
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.href = '/assets/vendor.js'
          document.head.appendChild(link)
        }
      }, { timeout: 2000 })
    }
  }, [])
}

/**
 * Hook pour optimiser les images avec LQIP (Low Quality Image Placeholder)
 */
export function useLQIP(imageSrc) {
  useEffect(() => {
    if (!imageSrc) return

    // Précharger l'image en arrière-plan
    const img = new Image()
    img.src = imageSrc
  }, [imageSrc])

  return imageSrc
}

/**
 * Hook pour contrôler les animations basées sur les préférences utilisateur
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}
