/**
 * PublicationRow — a single publication entry on the Publications page.
 *
 * Renders the venue label, linked title, authors, optional note,
 * action links (PDF, DOI, project), and a collapsible recommended citation.
 *
 * @param {object} props — see the publication object shape in publications.js
 *
 * The `authors` array can contain strings and { strong: "..." } objects
 * so your name can be bolded.
 */
import { Link } from 'react-router-dom'

export default function PublicationRow({ pub }) {
  const renderAuthors = () =>
    pub.authors.map((part, i) =>
      typeof part === 'string' ? (
        <span key={i}>{part}</span>
      ) : part.strong ? (
        <strong key={i}>{part.strong}</strong>
      ) : null
    )

  return (
    <article className="row publication-row">
      {/* Left: venue + year */}
      <p className="label">{pub.venue}</p>

      {/* Right: publication details */}
      <div>
        <h3>
          <a
            href={pub.titleHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {pub.title}
          </a>
        </h3>

        <p>
          Published in <em>{pub.venueFull}</em>
        </p>

        <p>{renderAuthors()}</p>

        {pub.note && <p>{pub.note}</p>}

        {/* Action links */}
        <div className="bio-links">
          {pub.links.map((link, i) => {
            if (link.external) {
              return (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              )
            }
            return <Link key={i} to={link.href}>{link.text}</Link>
          })}
        </div>

        {/* Recommended citation (collapsible) */}
        <details className="publication-citation">
          <summary>Recommended Citation</summary>
          <p>{pub.citation}</p>
        </details>
      </div>
    </article>
  )
}
