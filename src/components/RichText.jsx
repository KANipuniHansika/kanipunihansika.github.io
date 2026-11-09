/**
 * RichText — renders a "rich paragraph" (string or array of segments).
 *
 * A paragraph can be:
 *   "plain text"
 *   [ "text ", { em: "italic" }, " more text" ]
 *   [ "See ", { link: { text: "this paper", href: "...", external: true } }, "." ]
 *
 * Segment types:
 *   string                    — plain text
 *   { em: "..." }             — <em>
 *   { strong: "..." }         — <strong>
 *   { link: { text, href, external } } — <a>
 *
 * This is used by the credits sections and any paragraph that needs
 * inline formatting (italics, bold, links).
 *
 * @param {string|array} content — the rich text to render
 * @param {string}       tag     — HTML tag for the wrapper (default <p>)
 */
import { Link } from 'react-router-dom'

export default function RichText({ content, tag: Tag = 'p' }) {
  // Simple string paragraph
  if (typeof content === 'string') {
    return <Tag>{content}</Tag>
  }

  // Array of segments
  return (
    <Tag>
      {content.map((segment, i) => {
        if (typeof segment === 'string') return <span key={i}>{segment}</span>

        if (segment.em) return <em key={i}>{segment.em}</em>
        if (segment.strong) return <strong key={i}>{segment.strong}</strong>

        if (segment.link) {
          const { text, href, external } = segment.link
          if (external) {
            return (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer">
                {text}
              </a>
            )
          }
          // Internal links use React Router
          return <Link key={i} to={href}>{text}</Link>
        }

        return null
      })}
    </Tag>
  )
}
