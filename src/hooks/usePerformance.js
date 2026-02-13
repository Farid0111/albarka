import { useEffect, useRef, useState } from 'react'

/**
 * Hook pour charger les scripts tiers en arrière-plan
 * et éviter qu'ils bloquent le rendu principal
 */
export function useThirdPartyScript(src, options = {}) {
  useEffect(() => {
    if (!src) return

    const {
      async = true,
      defer = true,
      onLoad = null,
      onError = null,
      strategy = 'defer', // 'defer', 'idle', 'interaction'
    } = options

    let executeLoad = () => {
      const script = document.createElement('script')
      script.src = src
      script.async = async
      script.defer = defer

      if (onLoad) script.onload = onLoad
      if (onError) script.onerror = onError

      document.body.appendChild(script)

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }

    let cleanup

    switch (strategy) {
      case 'defer':
        cleanup = executeLoad()
        break

      case 'idle':
        if ('requestIdleCallback' in window) {
          const id = requestIdleCallback(() => {
            cleanup = executeLoad()
          })
          return () => cancelIdleCallback(id)
        } else {
          // Fallback pour les navigateurs sans requestIdleCallback
          const timeout = setTimeout(executeLoad, 2000)
          return () => clearTimeout(timeout)
        }
        break

      case 'interaction':
        const handler = () => {
          cleanup = executeLoad()
          document.removeEventListener('click', handler)
          document.removeEventListener('mouseover', handler)
        }
        document.addEventListener('click', handler, { once: true })
        document.addEventListener('mouseover', handler, { once: true })
        break

      default:
        cleanup = executeLoad()
    }

    return cleanup
  }, [src])
}

/**
 * Hook pour optimiser les appels réseau avec un délai configurable
 */
export function useDeferredFetch(url, delay = 1000) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return

    const timeoutId = setTimeout(() => {
      setLoading(true)
      fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [url, delay])

  return { data, loading, error }
}

/**
 * Hook pour observer les éléments visibles et déclencher des actions
 */
export function useIntersectionObserver(elementRef, options = {}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!elementRef.current) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    })

    observer.observe(elementRef.current)

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [elementRef])

  return isVisible
}
