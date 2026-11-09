/**
 * Publications — conference papers page.
 *
 * Lists all publications from src/data/publications.js as rows with
 * venue, title, authors, links, and a collapsible recommended citation.
 *
 * To add a paper: add an entry to publications.js.
 */
import Seo from '../components/Seo.jsx'
import PublicationRow from '../components/PublicationRow.jsx'
import { publications } from '../data/publications.js'

export default function Publications() {
  return (
    <>
      <Seo
        title="Publications · Nipuni Hansika"
        description="Nipuni Hansika, HCI researcher and lecturer. Selected work in creativity support, embodied interaction, accessible XR and human–robot interaction."
      />

      <section className="section page" id="publications">
        <div className="heading">
          <div>
            <p className="label">Publications</p>
            <h1>Conference Papers</h1>
          </div>
        </div>

        {publications.map((pub, i) => (
          <PublicationRow key={i} pub={pub} />
        ))}
      </section>
    </>
  )
}
