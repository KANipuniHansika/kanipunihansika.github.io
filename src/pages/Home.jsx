/**
 * Home — the homepage.
 *
 * Layout:
 *   ┌──────────┬──────────────────────────────────┐
 *   │          │ Label                              │
 *   │ [Photo]  │ Hello, I am Nipuni Hansika        │
 *   │          │ You can call me Hansi.             │
 *   │ caption  │ I explore how interactive...       │
 *   │          │ Bio paragraphs...                  │
 *   │          │ [Research→] [Papers→] [Teaching→] │
 *   │          │ [GitHub] [LinkedIn] [Scholar]     │
 *   │          │ [Say hello]                        │
 *   └──────────┴──────────────────────────────────┘
 *
 * The portrait is the ONLY element in the left column.
 * Everything else (heading, bio, links, social icons, email)
 * flows together in the right column so the page reads as
 * one connected block, not two separate sidebars.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { site } from '../data/site.js'
import { highlights } from '../data/highlights.js'

export default function Home() {
  return (
    <>
      <Seo
        title="Hansi · Nipuni Hansika"
        description="Nipuni Hansika — HCI researcher and lecturer exploring creativity, learning, and human-centred interactive systems."
      />

      {/* ── Intro: portrait (left) + bio (right) ────────────── */}
      <section className="hansi-intro" aria-labelledby="intro-heading">
        {/* Left column: portrait only */}
        <div className="hansi-profile">
          <div className="hansi-portrait">
            <span className="portrait-word" aria-hidden="true">Hansi</span>
            <img
              src="/images/profile2.jpg"
              alt="Portrait of Nipuni Hansika"
              onError={(e) => { e.target.hidden = true }}
            />
          </div>
          <p className="photo-note">
            A little curiosity goes a long way.
            <span aria-hidden="true">✧</span>
          </p>
        </div>

        {/* Right column: all text and interactive elements flow together */}
        <div className="hansi-about">
          <p className="label">{site.tagline}</p>

          <h1 id="intro-heading">
            Hello, I am<br />
            <span>Nipuni Hansika</span>
          </h1>

          <p className="preferred-name">
            You can call me <strong>Hansi</strong>.
          </p>

          <p className="hansi-lead">{site.lead}</p>

          <p>
            I am a <strong>Lecturer (Probationary)</strong> in the Department of
            Electrical and Information Engineering at the{' '}
            <strong>University of Ruhuna, Sri Lanka</strong>. I teach machine
            learning through practical laboratory sessions and supervise
            undergraduate projects.
          </p>

          <p>
            My research spans{' '}
            <strong>human–computer interaction, human–AI interaction,
            creativity support, embodied and multimodal interaction, and
            accessible AR/VR</strong>. I enjoy designing interactive prototypes
            and studying how people experience and use them.
          </p>

          <p>
            I completed my MSc in Computing at Singapore Management University,
            where my research contributed to <strong>MOTUS</strong>, a system
            supporting motor skill development and digital creative expression.
            This work resulted in a full paper at{' '}
            <strong>ACM CHI 2026</strong>, which I co-authored as an equal
            contributor.
          </p>

          <div className="bio-links">
            <Link to="/research">Explore my research →</Link>
            <Link to="/publications">Read my papers →</Link>
            <Link to="/teaching">Teaching →</Link>
            <a
              className="button"
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé ↗
            </a>
          </div>

          {/* Social links and email button flow with the text,
              not under the portrait. */}
          <div className="hansi-contact-row">
            <SocialLinks ariaLabel="Social profiles" includeEmail={false} />
            <a className="button hansi-email" href={`mailto:${site.email}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 6 9 7 9-7" />
              </svg>
              Say hello
            </a>
          </div>
        </div>
      </section>

      {/* ── Highlights ──────────────────────────────────────── */}
      <section className="home-section hansi-highlights" aria-labelledby="highlights-heading">
        <p className="label">Along the way</p>
        <h2 id="highlights-heading">
          Selected highlights <span aria-hidden="true">✦</span>
        </h2>

        {highlights.map((item, i) => (
          <article className="highlight" key={i}>
            <time dateTime={item.datetime}>{item.date}</time>
            <div>
              <p>
                {renderHighlightText(item)}
              </p>

              {/* Optional graduation photos with Lightbox */}
              {item.photos && (
                <div className="graduation-photos">
                  {item.photos.map((photo, j) => (
                    <GraduationPhoto key={j} photo={photo} />
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

/**
 * GraduationPhoto — a thumbnail that opens a Lightbox on click.
 */
function GraduationPhoto({ photo }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="figure-trigger"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge: ${photo.alt}`}
      >
        <img src={photo.src} alt={photo.alt} loading="lazy" />
      </button>
      {open && (
        <Lightbox
          src={photo.src}
          alt={photo.alt}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}

/**
 * renderHighlightText — renders a highlight paragraph.
 */
function renderHighlightText(item) {
  if (!item.links) return item.text

  return (
    <>
      {item.text.split(item.links[0].text).map((part, i, arr) => (
        <span key={i}>
          {part}
          {i < arr.length - 1 && (
            <a
              href={item.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.links[0].text}
            </a>
          )}
        </span>
      ))}
    </>
  )
}
