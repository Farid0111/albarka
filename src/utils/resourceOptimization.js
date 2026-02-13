/**
 * Utilitaire pour optimiser le chargement des ressources
 */

/**
 * Précharger une ressource critique
 */
export function preloadResource(href, as = 'style', type = null) {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  if (type) link.type = type
  
  // Pour les fonts, ajouter crossorigin
  if (as === 'font') {
    link.crossOrigin = 'anonymous'
  }
  
  document.head.appendChild(link)
}

/**
 * Prefetch une ressource non-critique
 */
export function prefetchResource(href) {
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = href
  document.head.appendChild(link)
}

/**
 * Pré-connecter à un domaine
 */
export function preconnectDomain(href, crossorigin = false) {
  const link = document.createElement('link')
  link.rel = 'preconnect'
  link.href = href
  if (crossorigin) link.crossOrigin = 'anonymous'
  document.head.appendChild(link)
}

/**
 * DNS prefetch pour un domaine
 */
export function dnsPrefetchDomain(href) {
  const link = document.createElement('link')
  link.rel = 'dns-prefetch'
  link.href = href
  document.head.appendChild(link)
}

/**
 * Optimiser les images pour RespImageSrcSet
 */
export function generateResponsiveImageSrcSet(basePath, extension, sizes = [1, 2]) {
  return sizes
    .map((size) => {
      const fileName = size === 1 ? basePath : `${basePath}@${size}x`
      return `${fileName}${extension} ${size}x`
    })
    .join(', ')
}

/**
 * Obtenir le meilleur format d'image basé sur le support du navigateur
 */
export function getOptimalImageFormat(basePath) {
  // La sélection est gérée par <picture> en HTML
  // Mais on peut utiliser ceci pour les attributs data
  if (typeof window !== 'undefined') {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1

    // Test WebP
    const hasWebP = canvas.toDataURL('image/webp').indexOf('webp') === 5
    
    // Test AVIF (plus difficile)
    const hasAVIF = false // À tester ultérieurement

    if (hasAVIF) return `${basePath}.avif`
    if (hasWebP) return `${basePath}.webp`
  }

  return null
}

/**
 * Invalider le cache des ressources si nécessaire
 */
export function invalidateCache(filePaths) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.controller?.postMessage({
      type: 'INVALIDATE_CACHE',
      paths: filePaths,
    })
  }
}
