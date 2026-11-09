/**
 * Figure — a single image with a caption.
 *
 * Clicking the image opens a Lightbox overlay showing the full-size
 * image with its caption.  Hovering gives a subtle zoom-in hint.
 *
 * This is the building block for all research project screenshots.
 *
 * @param {object} props
 * @param {string} props.src       — image path (relative to public/)
 * @param {string} props.alt       — accessible alt text
 * @param {string} props.caption   — caption shown below the image
 * @param {string} props.className — optional extra class (default 'detail-figure')
 *
 * Usage:
 *   <Figure src="/images/.../overview.jpg" alt="MOTUS overview" caption="..." />
 */
import { useState } from 'react'
import Lightbox from './Lightbox.jsx'

export default function Figure({ src, alt, caption, className = 'detail-figure' }) {
  const [open, setOpen] = useState(false)

  return (
    <figure className={className}>
      <button
        type="button"
        className="figure-trigger"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge: ${alt}`}
      >
        <img src={src} alt={alt} loading="lazy" />
      </button>
      {caption && <figcaption>{caption}</figcaption>}
      {open && (
        <Lightbox src={src} alt={alt} caption={caption} onClose={() => setOpen(false)} />
      )}
    </figure>
  )
}
