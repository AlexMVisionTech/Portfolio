import { useEffect, useState } from 'react'
import { gallery } from '../data/profile'

// "Moments" gallery — masonry photo grid with a lightbox.
// Renders nothing when the gallery array is empty.
export default function Gallery() {
  const [active, setActive] = useState(null) // index of the enlarged photo, or null

  // ESC closes the lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock page scroll while the lightbox is open
  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  if (gallery.length === 0) return null

  return (
    <div className="gallery-wrap">
      <div className="section-header">
        <p>Gallery</p>
        <h2>Moments</h2>
      </div>

      <div className="gallery">
        {gallery.map((photo, i) => (
          <figure
            className="gallery-item"
            key={photo.src}
            onClick={() => setActive(i)}
            onKeyDown={(e) => e.key === 'Enter' && setActive(i)}
            tabIndex={0}
            role="button"
            aria-label={`Enlarge photo: ${photo.title}`}
          >
            <img src={photo.src} alt={photo.title} loading="lazy" />
            <figcaption>
              <span className="gallery-title">{photo.title}</span>
              {photo.date && <span className="gallery-date">{photo.date}</span>}
            </figcaption>
          </figure>
        ))}
      </div>

      {active !== null && (
        <div
          className="lightbox"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={gallery[active].title}
        >
          <figure className="lightbox-inner">
            <img src={gallery[active].src} alt={gallery[active].title} />
            {(gallery[active].title || gallery[active].date) && (
              <figcaption>
                {gallery[active].title}
                {gallery[active].date ? ` · ${gallery[active].date}` : ''}
              </figcaption>
            )}
          </figure>
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close photo viewer">
            ×
          </button>
        </div>
      )}
    </div>
  )
}
