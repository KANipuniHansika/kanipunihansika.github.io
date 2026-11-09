/**
 * BlockRenderer — renders a single content block from projects.js.
 *
 * This is the engine that drives the research detail pages. Each
 * project's `detail.blocks` array contains objects with a `type` field;
 * BlockRenderer switches on that type and renders the appropriate JSX.
 *
 * Block types:
 *   figure          — single image + caption
 *   gallery         — grid of figures (columns: 2 or 3)
 *   text-section    — labelled section with heading, paragraphs, nested blocks
 *   flow            — 3-column numbered flow cards
 *   reading         — 3-column heading + text panel
 *   meta            — dl grid (uses projectDetail.meta)
 *   facts           — 3-column facts grid
 *   stats           — 3-column big-number stats
 *   steps           — ordered steps (2-column grid)
 *   table           — table with headers and rows
 *   implementation  — bullet list + figure side by side
 *   published-split — figure + text side by side
 *   role-box        — boxed contribution paragraph with technologies
 *   result-stat     — single big-number result
 *   reflection      — boxed design takeaway
 *   callout         — highlighted paragraph
 *   disclosure      — collapsible section containing nested blocks
 *   credits         — publication & credits section
 *   links           — a row of links
 *
 * Plain strings in a blocks array are rendered as <p> paragraphs.
 *
 * @param {object|string} block          — the block to render
 * @param {object}        projectDetail  — the project's detail object
 *                                         (needed for the `meta` block type)
 */
import { Link } from 'react-router-dom'
import Figure from './Figure.jsx'
import Gallery from './Gallery.jsx'
import Disclosure from './Disclosure.jsx'
import RichText from './RichText.jsx'

/**
 * renderBlocks — maps over an array of blocks and renders each one.
 * Exported so it can be reused by ResearchDetail.jsx.
 */
export function renderBlocks(blocks, projectDetail) {
  if (!blocks) return null
  return blocks.map((block, i) => (
    <BlockRenderer key={i} block={block} projectDetail={projectDetail} />
  ))
}

export default function BlockRenderer({ block, projectDetail }) {
  // Plain strings in a blocks array become paragraphs
  if (typeof block === 'string') {
    return <p>{block}</p>
  }

  switch (block.type) {
    // ── Single figure ────────────────────────────────────────
    case 'figure':
      return <Figure {...block.image} />

    // ── Gallery of figures ───────────────────────────────────
    case 'gallery':
      return <Gallery items={block.items} columns={block.columns} />

    // ── Text section (label + heading + paragraphs + blocks) ─
    case 'text-section':
      return <TextSection block={block} projectDetail={projectDetail} />

    // ── Flow cards (3 columns) ──────────────────────────────
    case 'flow':
      return (
        <div className="flow-grid">
          {block.items.map((item, i) => (
            <div key={i}>
              {item.number && <span className="flow-number">{item.number}</span>}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      )

    // ── Reading panel (3 columns) ────────────────────────────
    case 'reading':
      return (
        <div className="reading-grid">
          {block.items.map((item, i) => (
            <div key={i}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      )

    // ── Meta grid (looks up projectDetail.meta) ─────────────
    case 'meta':
      if (!projectDetail?.meta) return null
      return (
        <dl className="meta-grid">
          {projectDetail.meta.map((item, i) => (
            <div key={i}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      )

    // ── Facts grid (3 columns) ──────────────────────────────
    case 'facts':
      return (
        <div className="facts-grid">
          {block.items.map((item, i) => (
            <div key={i}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      )

    // ── Stats (3 columns with big numbers) ──────────────────
    case 'stats':
      return (
        <div className="stats-grid">
          {block.items.map((item, i) => (
            <div key={i}>
              <strong>{item.number}</strong>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      )

    // ── Ordered steps (2-column grid) ───────────────────────
    case 'steps':
      return (
        <ol className="steps-grid">
          {block.items.map((item, i) => (
            <li key={i}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      )

    // ── Table ───────────────────────────────────────────────
    case 'table':
      return (
        <>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  {block.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && <p className="table-note">{block.note}</p>}
        </>
      )

    // ── Implementation (list + figure) ──────────────────────
    case 'implementation':
      return (
        <div className="implementation-grid">
          <div>
            <ul>
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <Figure {...block.figure} />
        </div>
      )

    // ── Published split (figure + text) ─────────────────────
    case 'published-split':
      return (
        <div
          className="published-split"
          id={block.id}
          style={block.id ? { scrollMarginTop: '28px' } : undefined}
        >
          <Figure {...block.figure} />
          <div>
            <h2>{block.heading}</h2>
            {block.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )

    // ── Role / contribution box ──────────────────────────────
    case 'role-box':
      return (
        <div className="facts-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div>
            <h2>{block.heading}</h2>
            {block.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {block.techLabel && (
              <p>
                <strong>{block.techLabel}</strong> {block.techText}
              </p>
            )}
          </div>
        </div>
      )

    // ── Single result stat ──────────────────────────────────
    case 'result-stat':
      return (
        <div className="result-stat">
          <strong>{block.number}</strong>
          <p>{block.text}</p>
        </div>
      )

    // ── Reflection box ───────────────────────────────────────
    case 'reflection':
      return (
        <div className="reflection-box">
          {block.label && <p className="label">{block.label}</p>}
          <h2 className="section-heading">{block.heading}</h2>
          <p>{block.text}</p>
        </div>
      )

    // ── Callout ──────────────────────────────────────────────
    case 'callout':
      return <p className="callout">{block.text}</p>

    // ── Disclosure (collapsible) ────────────────────────────
    case 'disclosure':
      return (
        <Disclosure
          summary={block.summary}
          note={block.note}
          intro={block.intro}
        >
          {renderBlocks(block.blocks, projectDetail)}
        </Disclosure>
      )

    // ── Credits ─────────────────────────────────────────────
    case 'credits':
      return (
        <section className="credits-section">
          <h2>Publication &amp; credits</h2>
          {block.paragraphs.map((para, i) => (
            <RichText key={i} content={para} />
          ))}
        </section>
      )

    // ── Links row ────────────────────────────────────────────
    case 'links':
      return (
        <div className="project-links">
          {block.links.map((link, i) =>
            link.external ? (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            ) : (
              <Link key={i} to={link.href}>{link.text}</Link>
            )
          )}
        </div>
      )

    default:
      console.warn(`Unknown block type: ${block.type}`)
      return null
  }
}

/**
 * TextSection — renders a text-section block.
 *
 * A text-section has an optional id (for anchor links), optional label,
 * optional heading, paragraphs, and optional nested blocks. It can also
 * have subBlocks (rendered after the main blocks, used for sub-headings
 * within the same section).
 */
function TextSection({ block, projectDetail }) {
  return (
    <section
      className="detail-section"
      id={block.id}
      style={block.id ? { scrollMarginTop: '24px' } : undefined}
    >
      {block.label && <p className="label">{block.label}</p>}
      {block.heading && <h2 className="section-heading">{block.heading}</h2>}

      {/* Paragraphs */}
      {block.paragraphs?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      {/* Nested blocks (figures, galleries, flows, callouts, etc.) */}
      {renderBlocks(block.blocks, projectDetail)}

      {/* Sub-blocks (e.g. "Let the user finish" sub-heading in AR page) */}
      {block.subBlocks?.map((sub, i) => {
        if (sub.type === 'text-section') {
          return (
            <div key={i}>
              {sub.heading && <h3>{sub.heading}</h3>}
              {sub.paragraphs?.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          )
        }
        return <BlockRenderer key={i} block={sub} projectDetail={projectDetail} />
      })}
    </section>
  )
}
