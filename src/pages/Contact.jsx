/**
 * Contact — contact page.
 *
 * Two columns: greeting, topics, email, affiliation and sign-off on the
 * left; the contact form on the right (stacks on small screens).
 * All contact details come from src/data/site.js.
 */
import Seo from '../components/Seo.jsx'
import Tag from '../components/Tag.jsx'
import ContactForm from '../components/ContactForm.jsx'
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
        <div className="contact-info">
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
        </div>

        <ContactForm />
      </section>
    </>
  )
}
