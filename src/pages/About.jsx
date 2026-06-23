import { Link } from 'react-router-dom'
import profpic from '../assets/img/profpic.png'
import './About.css'

const IconUser = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
)

const IconCode = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)

const IconBriefcase = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
  </svg>
)

const IconGradCap = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const IconLink = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
  </svg>
)

const IconAward = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
)

export default function About() {
  return (
    <div className="about page-fade">
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero__layout">
            <div className="about-hero__left">
              <p className="page-eyebrow">About Me</p>
              <div className="about-hero__identity">
                <img src={profpic} alt="Rachel Mizer" className="about-hero__photo" />
                <h2 className="about-hero__title">A&nbsp;Developer with a <span style={{fontFamily:'Farmhouse', fontWeight:'500', fontSize:'3.3rem', position:'relative', top:'0.4rem', color:'#4a6fa5'}}>Designer&rsquo;s</span> <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display:'inline',verticalAlign:'middle',color:'#4a6fa5'}}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> <span style={{position:'relative', top:'0.6rem'}}>Eye</span></h2>
              </div>
              <p className="about-intro">
                I&rsquo;m a full-stack developer and UI/UX designer based in Clayton, NC. I have a long history of building for the web — combining technical depth with an instinct for clean, intuitive design. I&rsquo;ve also owned my own graphic design company since 2013 and continue to take on design work to this day, which means my eye for aesthetics is just as practiced as my code. I hold an AAS in Data Science and Programming Services Support from Wake Technical Community College, and I&rsquo;m three classes away from completing a second AAS in Computer Programming &amp; Development. I&rsquo;m always looking for the next problem worth solving.
              </p>
            </div>

            <aside className="about-hero__faq" aria-label="Frequently asked questions">
              <h2 className="faq__heading">Prospective Employer FAQ</h2>
              <dl className="faq__list">
                <div className="faq__item">
                  <dt>What&rsquo;s your preferred work arrangement?</dt>
                  <dd>I work best remotely or hybrid, but I&rsquo;ve never let a commute stand between me and work I care about.</dd>
                </div>
                <div className="faq__item">
                  <dt>How do you handle blockers?</dt>
                  <dd>I start by isolating the problem — breaking it down to understand exactly where I&rsquo;m stuck and why. I&rsquo;ll research independently first (docs, prior work, targeted searches), then try a few deliberate approaches. If I&rsquo;m still blocked after a reasonable effort, I reach out rather than spinning indefinitely. I document what I tried along the way, since blockers often surface edge cases worth sharing with the team.</dd>
                </div>
                <div className="faq__item">
                  <dt>What do you do when you find that a function or feature is missing in a project you&rsquo;re working on?</dt>
                  <dd>My first step is to cross-reference the SRS and any high-level documentation to confirm the gap isn&rsquo;t already scoped or ticketed elsewhere. I&rsquo;ll also check in with the team to make sure no one has already noticed it and is quietly working on a fix. If it&rsquo;s genuinely unaccounted for, I draft a short proposal: a clear description of what&rsquo;s missing, a severity and urgency assessment, a time estimate, and a dependency audit covering anything downstream that could break or degrade. I&rsquo;ll volunteer to own the implementation if my workload allows — and more often than not, by the time I&rsquo;m submitting that proposal, I&rsquo;ve already written the solution and I&rsquo;m staged to deploy.</dd>
                </div>
                <div className="faq__item">
                  <dt>What do you prize most in a workplace environment?</dt>
                  <dd>Psychological safety and honest communication. I do my best work in environments where people can raise concerns, ask questions, and share ideas without fear of being dismissed. I also thrive on regular collaboration — whether that&rsquo;s pair programming, design reviews, or just frequent check-ins that keep everyone aligned and moving in the same direction. Beyond that, I value teams that take craft seriously — where there&rsquo;s a shared standard for quality and a genuine interest in doing things well, not just done.</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="resume section" aria-label="Resume">
        <div className="container">
          <div className="resume__header">
            <h2 className="section-title">Résumé</h2>
          </div>

          <div className="resume__body">
            {/* Contact */}
            <div className="resume__contact-row">
              <span>Clayton, NC</span>
              <span aria-hidden="true">·</span>
              <a href="mailto:rachelmizer@hotmail.com">rachelmizer@hotmail.com</a>
              <span aria-hidden="true">·</span>
              <a href="https://linkedin.com/in/rachelmizer" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            {/* Summary */}
            <div className="resume__section">
              <h3 className="resume__section-title">
                <span className="resume__section-icon"><IconUser /></span>
                Professional Summary
              </h3>
              <p className="resume__summary">
                Full-stack developer with a long history of building for the web, blending UI/UX design instincts with practical experience in JavaScript, Vue, React, Django, REST APIs, and modern web tooling. Strong at creating clean, intuitive interfaces, working with JSON/YAML configurations, and developing data-driven dashboards. Comfortable across the full workflow — from frontend components and responsive layouts to API integration, debugging, and iterative improvements. Experienced with Git-based collaboration, Agile environments, and a wide range of web and data tools.
              </p>
            </div>

            {/* Skills */}
            <div className="resume__section">
              <h3 className="resume__section-title">
                <span className="resume__section-icon"><IconCode /></span>
                Technical Skills
              </h3>
              <div className="skills-grid">
                <div className="skill-group">
                  <span className="skill-group__label">Languages &amp; Frameworks</span>
                  <div className="skill-tags">
                    {['JavaScript', 'React.js', 'Vue.js', 'Python', 'Django', 'HTML', 'CSS', 'SQL', 'SAS'].map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <span className="skill-group__label">Web &amp; Interface</span>
                  <div className="skill-tags">
                    {['Frontend Development', 'WCAG 2.2+', 'UI/UX Design', 'Responsive Layouts', 'Component Design', 'REST API Integration', 'Data-Driven Interfaces'].map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <span className="skill-group__label">Tools &amp; Technologies</span>
                  <div className="skill-tags">
                    {['Git', 'GitHub', 'VS Code', 'npm', 'pip', 'JSON', 'YAML', 'Linux/CLI', 'AI Tools'].map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <span className="skill-group__label">Data &amp; Visualization</span>
                  <div className="skill-tags">
                    {['Excel (Advanced)', 'Tableau', 'Power BI', 'Data Workflows'].map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <span className="skill-group__label">Dev Practices</span>
                  <div className="skill-tags">
                    {['Agile/Scrum', 'Version Control', 'Debugging', 'Iterative Development', 'Documentation'].map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="resume__section">
              <h3 className="resume__section-title">
                <span className="resume__section-icon"><IconBriefcase /></span>
                Projects &amp; Experience
              </h3>

              <div className="resume__entry">
                <div className="resume__entry-header">
                  <div>
                    <h4 className="resume__entry-title">
                      Orderly
                      <Link to="/portfolio" className="entry-link-icon" aria-label="View Orderly on portfolio page">
                        <IconLink />
                      </Link>
                    </h4>
                    <p className="resume__entry-sub">Full-Stack Web Application — Independent Development</p>
                  </div>
                </div>
                <ul className="resume__list">
                  <li>Built and maintained core features across frontend, backend, and UI/UX layers using JavaScript, HTML/CSS, Django, and REST APIs.</li>
                  <li>Designed responsive interfaces and data-driven dashboards with web performance optimization techniques.</li>
                  <li>Integrated REST endpoints, JSON/YAML configurations, and environment variables to support dynamic data and user interactions.</li>
                  <li>Conducted rigorous accessibility testing (WCAG 2.2+) and debugging to ensure compliance and proper semantic markup.</li>
                </ul>
              </div>

              <div className="resume__entry">
                <div className="resume__entry-header">
                  <div>
                    <h4 className="resume__entry-title">
                      FlyWheel
                      <span className="entry-link-icon entry-link-icon--disabled" aria-label="Link coming soon" data-tooltip="Link coming soon">
                        <IconLink />
                      </span>
                    </h4>
                    <p className="resume__entry-sub">Internal DevOps &amp; Operations Platform</p>
                  </div>
                </div>
                <ul className="resume__list">
                  <li>Developed UI/UX components for dashboards, ticketing, messaging, and role-based access control.</li>
                  <li>Built interactive frontend features supporting real-time updates and multi-user operational workflows.</li>
                  <li>Worked with REST endpoints, structured data models, and JSON/YAML configurations to support backend automation.</li>
                  <li>Improved usability and navigation through refined interface layouts and user flow design.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="resume__section">
              <h3 className="resume__section-title">
                <span className="resume__section-icon"><IconGradCap /></span>
                Education
              </h3>

              <div className="resume__entry">
                <div className="resume__entry-header">
                  <div>
                    <h4 className="resume__entry-title">AAS, Data Science and Programming Services Support</h4>
                    <p className="resume__entry-sub">Wake Technical Community College</p>
                  </div>
                </div>
              </div>

              <div className="resume__entry">
                <div className="resume__entry-header">
                  <div>
                    <h4 className="resume__entry-title">AAS, Computer Programming &amp; Development</h4>
                    <p className="resume__entry-sub">Wake Technical Community College</p>
                  </div>
                  <span className="resume__entry-date">In Progress · Completion 2027</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="resume__section">
              <h3 className="resume__section-title">
                <span className="resume__section-icon"><IconAward /></span>
                Certifications
              </h3>
              <div className="cert-grid">
                {[
                  { name: 'Python', issuer: 'Certiport' },
                  { name: 'SAS Academic Specialist', issuer: 'WTCC' },
                  { name: 'Programming Fundamentals', issuer: 'WTCC' },
                  { name: 'IT Foundations Professional', issuer: 'WTCC' },
                  { name: 'React.js Essential Training', issuer: 'LinkedIn Learning' },
                  { name: 'JSON Essential Training', issuer: 'LinkedIn Learning' },
                  { name: 'JavaScript Practice: String Manipulation', issuer: 'LinkedIn Learning' },
                  { name: 'JavaScript: Web Form Programming', issuer: 'LinkedIn Learning' },
                  { name: 'Practical UX Weekly: Season Two', issuer: 'LinkedIn Learning' },
                  { name: 'Developing Secure Software', issuer: 'LinkedIn Learning' },
                  { name: 'Programming Foundations: Object-Oriented Design', issuer: 'LinkedIn Learning' },
                  { name: 'Learning Relational Databases', issuer: 'LinkedIn Learning' },
                  { name: 'Programming Foundations: Databases', issuer: 'LinkedIn Learning' },
                  { name: 'Software Architecture: Patterns for Developers', issuer: 'LinkedIn Learning' },
                  { name: 'Software Design: Modeling with UML', issuer: 'LinkedIn Learning' },
                  { name: 'Project Management Foundations: Requirements', issuer: 'LinkedIn Learning' },
                  { name: 'Software Design: Developing Effective Requirements', issuer: 'LinkedIn Learning' },
                  { name: 'Learning GitHub', issuer: 'LinkedIn Learning' },
                  { name: 'Agile Software Development', issuer: 'LinkedIn Learning' },
                  { name: 'Agile Foundations', issuer: 'LinkedIn Learning' },
                  { name: 'What Is Scrum?', issuer: 'LinkedIn Learning' },
                  { name: 'Python Object Oriented Programming', issuer: 'LinkedIn Learning' },
                  { name: 'Project Management Simplified', issuer: 'LinkedIn Learning' },
                  { name: 'Project Management Foundations', issuer: 'LinkedIn Learning' },
                  { name: 'Team Collaboration in Microsoft 365', issuer: 'LinkedIn Learning' },
                  { name: 'Effective Collaboration across Teams', issuer: 'LinkedIn Learning' },
                  { name: 'Software Design: From Requirements to Release', issuer: 'LinkedIn Learning' },
                  { name: 'Software Development Life Cycle (SDLC)', issuer: 'LinkedIn Learning' },
                ].map(cert => (
                  <div key={cert.name} className="cert-item">
                    <span className="cert-item__name">{cert.name}</span>
                    <span className="cert-item__issuer">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
