/**
 * Research — overview page listing all research projects.
 *
 * Shows the featured project (MOTUS) as a large card, followed by a
 * 3-column grid of project cards for the remaining projects.
 *
 * Data comes from src/data/projects.js.
 */
import Seo from '../components/Seo.jsx'
import FeaturedProject from '../components/FeaturedProject.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Research() {
  // The featured project (currently MOTUS) and the rest
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <>
      <Seo
        title="Research · Nipuni Hansika"
        description="Nipuni Hansika, HCI researcher and lecturer. Selected work in creativity support, embodied interaction, accessible XR and human–robot interaction."
      />

      <section className="section page research-overview" id="work">
        <div className="heading">
          <div>
            <p className="label">Research Projects</p>
            <h1>Selected Work</h1>
          </div>
          <p>
            Research prototypes and user studies across digital drawing,
            accessibility, and human–robot interaction.
          </p>
        </div>

        {/* Featured project */}
        {featured && <FeaturedProject project={featured} />}

        {/* Project cards */}
        <div className="grid">
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
