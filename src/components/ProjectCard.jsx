/**
 * ProjectCard — a card on the research overview page linking to a
 * project detail page.
 *
 * @param {object} props
 * @param {object} props.project — one entry from projects.js (non-featured)
 *
 * The card shows the category label, title (as a link), description,
 * and an "Explore project →" link.
 */
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="card" id={project.slug}>
      <p className="label">{project.label}</p>
      <h3>
        <Link className="project-title-link" to={`/research/${project.slug}`}>
          {project.title}
        </Link>
      </h3>
      <p>{project.description}</p>
      <Link className="explore-project" to={`/research/${project.slug}`}>
        Explore project →
      </Link>
    </article>
  )
}
