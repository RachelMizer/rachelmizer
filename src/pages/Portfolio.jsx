import './Portfolio.css'

const IconExternalLink = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const projects = [
  {
    id: 'orderly',
    image: null,
    title: 'Orderly',
    type: 'Full-Stack Web Application',
    description:
      'An independently developed full-stack application with responsive interfaces and data-driven dashboards. Built with a focus on performance, accessibility, and clean UX.',
    tech: ['JavaScript', 'HTML/CSS', 'Django', 'REST API', 'WCAG 2.2+'],
    highlights: [
      'Responsive, data-driven dashboard UI',
      'REST API integration with JSON/YAML configs',
      'WCAG 2.2+ accessibility compliance',
      'Performance-optimized frontend',
    ],
    links: [
      { href: 'https://orderly-0t1h.onrender.com/', label: 'Live Site' },
      { href: 'https://orderly-0t1h.onrender.com/admin/login', label: 'Admin' },
    ],
  },
  {
    id: 'makeaway',
    image: null,
    title: 'MakeAWay',
    type: 'Full-Stack Web Application',
    description:
      'A complete vacation-planning command center that brings every trip detail into one structured workspace — flights, lodging, transportation, activities, traveler profiles, and documents — so you never juggle emails, screenshots, and browser tabs again.',
    tech: ['React.js', 'Vite', 'Python', 'Django', 'REST API', 'UI/UX Design'],
    highlights: [
      'Traveler profiles: passports, medical info, insurance cards, and document uploads',
      'Full transportation coverage: flights, ground transit, rentals, charters, and cruises',
      'Lodging management for hotels, condos, cabins, and campgrounds',
      'Activities, ticket pricing, coupons, and a dedicated documents section',
      'Full-trip nesting with unlimited entries and auto-generated durations',
    ],
    links: [],
  },
  {
    id: 'flywheel',
    image: null,
    title: 'FlyWheel',
    type: 'Internal DevOps & Operations Platform',
    description:
      'A multi-user internal platform featuring dashboards, ticketing, messaging, and role-based access control — built to support real-time operational workflows.',
    tech: ['JavaScript', 'REST API', 'JSON/YAML', 'RBAC', 'UI/UX Design'],
    highlights: [
      'Dashboards, ticketing, and real-time messaging UI',
      'Role-based access control (RBAC)',
      'Multi-user operational workflows',
      'Refined interface layouts and user flow',
    ],
    links: [],
  },
]

export default function Portfolio() {
  return (
    <div className="portfolio page-fade">
      <section className="portfolio-hero section">
        <div className="container">
<h1 className="page-title">Things I&rsquo;ve Built</h1>
          <p className="portfolio-intro">
            A selection of projects across full-stack development, UI/UX design, and data-driven interfaces.
          </p>
        </div>
      </section>

      <section className="projects section" aria-label="Project list">
        <div className="container">
          <div className="projects__grid">
            {projects.map(project => (
              <article key={project.id} className="project-card">
                <div className="project-card__header">
                  <div>
                    <p className="project-card__type">{project.type}</p>
                    <h2 className="project-card__title">{project.title}</h2>
                  </div>
                </div>

                <div className="project-card__image">
                  {project.image
                    ? <img src={project.image} alt={`${project.title} thumbnail`} />
                    : <span className="project-card__image-placeholder">Image coming soon</span>
                  }
                </div>

                <p className="project-card__desc">{project.description}</p>

                <ul className="project-card__highlights" aria-label="Project highlights">
                  {project.highlights.map(h => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="project-card__footer">
                  <div className="project-card__tech" aria-label="Technologies used">
                    {project.tech.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <span className="project-links__prefix">See it in action &rarr;</span>
                    {project.links.length > 0
                      ? project.links.map(link => (
                          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="project-link">
                            <IconExternalLink />
                            {link.label}
                          </a>
                        ))
                      : <span className="project-link project-link--coming-soon">
                          <IconExternalLink />
                          Coming Soon
                        </span>
                    }
                  </div>
                </div>
              </article>
            ))}

            {/* Placeholder for future projects */}
            <div className="project-card project-card--placeholder" aria-label="More projects coming soon">
              <div className="placeholder-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <p className="placeholder-text">More projects coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
