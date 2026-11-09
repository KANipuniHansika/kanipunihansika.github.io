/**
 * ResearchDetail — dynamic page for a single research project.
 *
 * Route: /research/:slug
 *
 * Looks up the project by slug in src/data/projects.js and renders:
 *   - Back link
 *   - Project header (label, title, deck, subtitle, affiliation, overview, links)
 *   - Content blocks (rendered by BlockRenderer)
 *   - Endnote links
 *
 * If the slug doesn't match any project, shows a "not found" message.
 */
import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import BackLink from '../components/BackLink.jsx'
import BlockRenderer, { renderBlocks } from '../components/BlockRenderer.jsx'
import { projects } from '../data/projects.js'

export default function ResearchDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  // Project not found
  if (!project) {
    return (
      <section className="section page">
        <Seo title="Project not found · Nipuni Hansika" />
        <h1>Project not found</h1>
        <p>The project you are looking for does not exist.</p>
        <Link to="/research">← Back to selected work</Link>
      </section>
    )
  }

  const d = project.detail

  return (
    <>
      <Seo
        title={`${project.title} · Nipuni Hansika`}
        description="Nipuni Hansika, HCI researcher and lecturer. Selected work in creativity support, embodied interaction, accessible XR and human–robot interaction."
      />

      <div className="research-page project-detail">
        <BackLink slug={project.slug} />

        <article
          className="research-project"
          id={project.slug}
          aria-labelledby={`${project.slug}-title`}
        >
          {/* ── Header ─────────────────────────────────────── */}
          <header className={d.deck ? 'motus-hero' : undefined}>
            <p className="label">{d.label}</p>

            <h1 id={`${project.slug}-title`}>
              {d.titleLines ? (
                // Multi-line title with optional <em> on second line
                <>
                  {d.titleLines[0]}<br />
                  {d.titleLines[1]?.em
                    ? <em>{d.titleLines[1].em}</em>
                    : d.titleLines[1]}
                </>
              ) : (
                d.title
              )}
            </h1>

            {/* Deck (large subtitle — MOTUS only) */}
            {d.deck && (
              <p className="motus-deck">
                {d.deck.text}<br />
                <em>{d.deck.em}</em>
              </p>
            )}

            {d.subtitle && <p className="project-subtitle">{d.subtitle}</p>}
            {d.affiliation && <p className="project-affiliation">{d.affiliation}</p>}
            {d.overview && <p className="project-overview">{d.overview}</p>}

            {/* Project links (buttons, DOIs, anchors) */}
            {d.links && (
              <div className="project-links">
                {d.links.map((link, i) => {
                  const content = link.button ? (
                    <a
                      className="button"
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.text}
                    </a>
                  ) : link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <a href={link.href}>{link.text}</a>
                  )
                  return <span key={i}>{content}</span>
                })}
              </div>
            )}
          </header>

          {/* ── Content blocks ────────────────────────────── */}
          {renderBlocks(d.blocks, d)}
        </article>

        {/* ── Endnote ──────────────────────────────────────── */}
        <p className="research-endnote">
          <Link to="/research">← Back to selected work</Link>
          {' · '}
          <Link to="/contact">Let's connect →</Link>
        </p>
      </div>
    </>
  )
}
