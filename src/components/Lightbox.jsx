/**
 * Lightbox — full-screen image overlay that opens on click.
 *
 * Renders a dark overlay with the image centered and its caption below.
 * Closes when you click the background, press Escape, or click the × button.
 *
 * This is used by Figure.jsx (research screenshots) and the graduation
 * photos on the homepage.  Each caller manages its own `open` state and
 * renders <Lightbox> only when open.
 *
 * @param {string} src      — full-size image path
 * @param {string} alt      — accessible alt text
 * @param {string} caption  — caption shown below the image (optional)
 * @param {function} onClose — called when the lightbox should close
 */
import { useEffect } from 'react'

export default function Lightbox({ src, alt, caption, onClose }) {
  // Close on Escape; lock body scroll while open
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <figure className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close image"
          type="button"
        >
          ×
        </button>
        <img src={src} alt={alt} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  )
}
