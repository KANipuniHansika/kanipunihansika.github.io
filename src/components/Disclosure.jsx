/**
 * Disclosure — a collapsible <details> / <summary> section.
 *
 * Used for "Explore the interface..." expandable sections on the
 * research detail pages, and for "Recommended Citation" on the
 * publications page.
 *
 * @param {object} props
 * @param {string} props.summary — clickable heading text
 * @param {string} props.note    — optional sub-text shown under the summary
 * @param {string} props.intro   — optional paragraph shown at the top of the body
 * @param {node}   props.children — content shown when expanded
 *
 * Usage:
 *   <Disclosure summary="Explore the interface" note="Practice canvas · ...">
 *     <p>Content here...</p>
 *   </Disclosure>
 */
export default function Disclosure({ summary, note, intro, children }) {
  return (
    <details className="detail-disclosure">
      <summary>
        {summary}
        {note && <span>{note}</span>}
      </summary>
      <div className="detail-disclosure-body">
        {intro && <p>{intro}</p>}
        {children}
      </div>
    </details>
  )
}
