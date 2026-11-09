/**
 * Experience — employment history page.
 *
 * Lists all experience entries from src/data/experience.js using the
 * shared InstitutionEntry component.
 *
 * To add a role: add an entry to experience.js.
 */
import Seo from '../components/Seo.jsx'
import InstitutionEntry from '../components/InstitutionEntry.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <>
      <Seo
        title="Experience · Nipuni Hansika"
        description="Nipuni Hansika, HCI researcher and lecturer. Selected work in creativity support, embodied interaction, accessible XR and human–robot interaction."
      />

      <section className="section page career" id="experience">
        <p className="label">Teaching &amp; Research</p>
        <h1>Experience</h1>

        {experience.map((entry, i) => (
          <InstitutionEntry key={i} {...entry} />
        ))}
      </section>
    </>
  )
}
