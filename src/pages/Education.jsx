/**
 * Education — academic qualifications page.
 *
 * Lists all education entries from src/data/education.js using the
 * shared InstitutionEntry component (same as Experience).
 *
 * To add a degree: add an entry to education.js.
 */
import Seo from '../components/Seo.jsx'
import InstitutionEntry from '../components/InstitutionEntry.jsx'
import { education } from '../data/education.js'

export default function Education() {
  return (
    <>
      <Seo
        title="Education · Nipuni Hansika"
        description="Nipuni Hansika, HCI researcher and lecturer. Selected work in creativity support, embodied interaction, accessible XR and human–robot interaction."
      />

      <section className="section page career" id="education">
        <p className="label">Academic Background</p>
        <h1>Education</h1>

        {education.map((entry, i) => (
          <InstitutionEntry key={i} {...entry} />
        ))}
      </section>
    </>
  )
}
