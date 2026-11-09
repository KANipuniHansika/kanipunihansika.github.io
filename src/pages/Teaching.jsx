/**
 * Teaching — teaching roles page.
 *
 * Lists all teaching entries from src/data/teaching.js. Each entry
 * shows a date, institution logo + name, role, department, optional
 * subtitle, bullet points, and optional tags.
 *
 * To add a teaching role: add an entry to teaching.js.
 */
import Seo from '../components/Seo.jsx'
import Tag from '../components/Tag.jsx'
import { teaching } from '../data/teaching.js'

export default function Teaching() {
  return (
    <>
      <Seo
        title="Teaching · Nipuni Hansika"
        description="Nipuni Hansika, HCI researcher and lecturer. Selected work in creativity support, embodied interaction, accessible XR and human–robot interaction."
      />

      <section className="section page teaching-page">
        <p className="label">Teaching &amp; Supervision</p>
        <h1>Teaching Experience</h1>
        <p className="teaching-intro">
          I teach computing and artificial intelligence through practical
          exercises, interactive prototypes, and student projects.
        </p>

        {teaching.map((entry, i) => (
          <article className="teaching-entry" key={i}>
            {/* Left column: date + logo */}
            <div className="teaching-left">
              <div className="teaching-date">{entry.date}</div>
              {entry.logo && (
                <div className={`institution-logo${entry.crest ? ' institution-logo--crest' : ''}`}>
                  <img src={entry.logo} alt={`${entry.institution} logo`} loading="lazy" />
                </div>
              )}
            </div>

            {/* Right column: teaching details */}
            <div>
              <p className="label">
                {entry.institution} · {entry.location}
              </p>
              <h2>{entry.role}</h2>
              <p>{entry.department}</p>

              {entry.subtitle && <h3>{entry.subtitle}</h3>}

              <ul>
                {entry.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>

              {entry.tags && (
                <div className="tags">
                  {entry.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
