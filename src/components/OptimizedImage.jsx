import LazyImage from './LazyImage'

/**
 * Composant pour servir des images dans les meilleurs formats modernes
 * Supporte: AVIF, WebP, PNG/JPG
 */
export default function OptimizedImage({
  src,
  alt = '',
  className = '',
  width = null,
  height = null,
  priority = false,
}) {
  if (!src) return null

  // Extract base path and extension
  const lastDot = src.lastIndexOf('.')
  const basePath = lastDot > 0 ? src.substring(0, lastDot) : src
  const extension = lastDot > 0 ? src.substring(lastDot) : ''

  // Build srcset for modern formats
  const srcSet = [
    // AVIF (meilleur format, le plus petit)
    `${basePath}.avif 1x, ${basePath}@2x.avif 2x`,
    // WebP (bon support)
    `${basePath}.webp 1x, ${basePath}@2x.webp 2x`,
  ].join(', ')

  // Fallback srcset for older browsers
  const legacySrcSet = [
    `${src} 1x`,
    `${src.replace(extension, '@2x' + extension)} 2x`,
  ].join(', ')

  if (priority) {
    // Si l'image est prioritaire (LCP), la charger immédiatement
    return (
      <picture>
        <source srcSet={`${basePath}.avif`} type="image/avif" />
        <source srcSet={`${basePath}.webp`} type="image/webp" />
        <img
          src={src}
          alt={alt}
          className={className}
          width={width || undefined}
          height={height || undefined}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      </picture>
    )
  }

  return (
    <picture>
      <source srcSet={`${basePath}.avif`} type="image/avif" />
      <source srcSet={`${basePath}.webp`} type="image/webp" />
      <LazyImage
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        srcSet={legacySrcSet}
      />
    </picture>
  )
}
