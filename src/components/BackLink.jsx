/**
 * BackLink — "← All research projects" link shown at the top of
 * each research detail page.
 *
 * @param {string} props.slug — the project slug (used for the hash link)
 *
 * Links back to /research#<slug> so the user returns to the right card.
 */
import { Link } from 'react-router-dom'

export default function BackLink({ slug }) {
  return (
    <Link className="back-projects" to={`/research#${slug}`}>
      ← All research projects
    </Link>
  )
}
