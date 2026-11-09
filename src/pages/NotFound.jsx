/**
 * NotFound — 404 page shown when no route matches.
 */
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found · Nipuni Hansika" />
      <section className="section page">
        <h1>Page not found</h1>
        <p>The page you are looking for doesn't exist.</p>
        <p>
          <Link to="/">← Back home</Link>
        </p>
      </section>
    </>
  )
}
