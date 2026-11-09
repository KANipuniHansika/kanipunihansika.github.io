/**
 * Contact — contact page.
 *
 * Shows a greeting, topics, email button, affiliation, and sign-off.
 * All contact details come from src/data/site.js.
 */
import Seo from '../components/Seo.jsx'
import Tag from '../components/Tag.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  const a = site.affiliation

  return (
    <>
      <Seo
        title="Contact · Nipuni Hansika"
        description="Nipuni Hansika, HCI researcher and lecturer. Selected work in creativity support, embodied interaction, accessible XR and human–robot interaction."
      />

      <section className="contact-intro" aria-labelledby="contact-heading">
        <p className="label">Let's connect</p>

        <h1 id="contact-heading">
          Good conversations<br />
          <span>start with hello.</span>
        </h1>

        <p className="contact-lead">
          Have a research idea, a teaching opportunity, or something you're
          curious about? I'd love to hear from you.
        </p>

        <div className="contact-topics" aria-label="Topics to connect about">
          <Tag>Research collaborations</Tag>
          <Tag>Teaching &amp; learning</Tag>
          <Tag>HCI &amp; human–AI interaction</Tag>
        </div>

        <a className="button contact-hello" href={`mailto:${site.email}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 6 9 7 9-7" />
          </svg>
          Say hello
        </a>

        <p className="contact-email">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>

        <div className="contact-affiliation">
          <p className="label">Where I'm based</p>
          <h2>{a.institution}</h2>
          <p>
            {a.department}<br />
            {a.faculty} · {a.location}
          </p>
        </div>

        <p className="contact-signoff">
          A little curiosity goes a long way.
          <span aria-hidden="true">✧</span>
        </p>
      </section>
    </>
  )
}
