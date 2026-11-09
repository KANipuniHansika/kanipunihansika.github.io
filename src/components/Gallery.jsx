/**
 * Gallery — a responsive grid of Figure components.
 *
 * @param {object} props
 * @param {array}  props.items   — array of { src, alt, caption }
 * @param {number} props.columns — 2 (default) or 3
 *
 * Usage:
 *   <Gallery columns={2} items={[
 *     { src: '/images/.../a.png', alt: 'A', caption: 'Caption A' },
 *     { src: '/images/.../b.png', alt: 'B', caption: 'Caption B' },
 *   ]} />
 */
import Figure from './Figure.jsx'

export default function Gallery({ items, columns = 2 }) {
  const className = columns === 3 ? 'gallery gallery-three' : 'gallery'

  return (
    <div className={className}>
      {items.map((item, i) => (
        <Figure key={i} {...item} />
      ))}
    </div>
  )
}
