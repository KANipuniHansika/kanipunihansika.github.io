/**
 * InstitutionEntry — reusable entry block for the Experience and Education
 * pages.
 *
 * Layout:
 *   ┌──────────────┬──────────────────────────┐
 *   │ Date         │ Institution name          │
 *   │ [logo]       │ Location                 │
 *   │              │ Role / Degree title       │
 *   │              │ Description paragraphs   │
 *   └──────────────┴──────────────────────────┘
 *
 * The logo sits in the left column under the date, keeping the
 * institution name and content in the right column clean.
 *
 * @param {object} props — see education.js / experience.js for field docs.
 */
import { Link } from 'react-router-dom'

export default function InstitutionEntry({
  date,
  institution,
  location,
  logo,
  crest = false,
  role,
  degree,
  description,
  details,
}) {
  return (
    <article className="row institution-entry">
      {/* ── Left column: date + logo ──────────────────────── */}
      <div className="entry-left">
        <p className="entry-date">{date}</p>
        {logo && (
          <div className={`institution-logo${crest ? ' institution-logo--crest' : ''}`}>
            <img src={logo} alt={`${institution} logo`} loading="lazy" />
          </div>
        )}
      </div>

      {/* ── Right column: institution details ─────────────── */}
      <div className="entry-content">
        <p className="institution-name">{institution}</p>
        <p className="institution-location">{location}</p>

        {/* Job title or degree */}
        <h3>{role ?? degree}</h3>

        {/* Experience: simple description paragraphs */}
        {description?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {/* Education: structured details */}
        {details?.map((detail, i) => {
          if (detail.collapsible) {
            return (
              <details className="publication-citation" key={i}>
                <summary>{detail.summary}</summary>
                <p>{detail.text}</p>
              </details>
            )
          }

          if (detail.label && !detail.value) {
            return <p key={i}><strong>{detail.label}</strong></p>
          }

          if (detail.label && detail.value) {
            return (
              <p key={i}>
                <strong>{detail.label}</strong> <em>{detail.value}</em>
              </p>
            )
          }

          if (detail.text && detail.link) {
            const linkContent = (
              <strong> <em> {detail.link.text} </em> </strong>
            )
            return (
              <p key={i}>
                <em>{detail.text}</em>
                {detail.link.external ? (
                  <a href={detail.link.href} target="_blank" rel="noopener noreferrer">
                    {linkContent}
                  </a>
                ) : (
                  <Link to={detail.link.href}>{linkContent}</Link>
                )}
                {detail.trailingText && <em>{detail.trailingText}</em>}
              </p>
            )
          }

          return null
        })}
      </div>
    </article>
  )
}
