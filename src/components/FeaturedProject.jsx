/**
 * FeaturedProject — the large highlighted project at the top of the
 * research overview page (currently MOTUS).
 *
 * Shows the project description and tags on the left, and the
 * publication / venue info on the right (in an <aside>).
 *
 * @param {object} props.project — a featured entry from projects.js
 */
import { Link } from 'react-router-dom'
import Tag from './Tag.jsx'

export default function FeaturedProject({ project }) {
  return (
    <article className="feature" id={project.slug}>
      <div>
        <p className="label">{project.label}</p>
        <h3>
          <Link className="project-title-link" to={`/research/${project.slug}`}>
            {project.title}
          </Link>
        </h3>
        <p>{project.description}</p>

        {project.tags && (
          <div className="tags">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}

        <Link className="explore-project" to={`/research/${project.slug}`}>
          Explore project →
        </Link>
      </div>

      {project.aside && (
        <aside>
          <p className="label">{project.aside.label}</p>
          <p>{project.aside.text}</p>
          <p>
            <a
              href={project.aside.link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.aside.link.text}
            </a>
          </p>
        </aside>
      )}
    </article>
  )
}
