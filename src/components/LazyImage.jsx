import { useEffect, useRef, useState } from 'react'

export default function LazyImage({ 
  src, 
  alt = '', 
  className = '', 
  width = null, 
  height = null,
  srcSet = null,
  sizes = null,
}) {
  const [imageSrc, setImageSrc] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const imgRef = useRef(null)

  useEffect(() => {
    if (!imgRef.current) return

    // Utiliser IntersectionObserver natif pour le lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src)
            if (imgRef.current) {
              observer.unobserve(imgRef.current)
            }
          }
        })
      },
      {
        rootMargin: '50px',
      }
    )

    observer.observe(imgRef.current)

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [src])

  // Calcul du ratio d'aspect pour éviter le CLS
  const aspectRatioPadding = width && height ? `${(height / width) * 100}%` : 'auto'

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Placeholder avec aspect ratio pour éviter le layout shift */}
      <div style={{
        paddingBottom: aspectRatioPadding,
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
        borderRadius: 'inherit',
      }}>
        <img
          ref={imgRef}
          src={imageSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={className}
          loading="lazy"
          width={width || undefined}
          height={height || undefined}
          decoding="async"
          onLoad={() => setIsLoading(false)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: isLoading ? 0.5 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      </div>
    </div>
  )
}
