/**
 * Tag — small pill-style label used on project cards, teaching entries,
 * and the contact page.
 *
 * Usage:  <Tag>Machine learning</Tag>
 *        <Tag> HCI &amp; human–AI interaction </Tag>
 */
export default function Tag({ children }) {
  return <span className="tag">{children}</span>
}
