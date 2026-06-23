import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__links">
          <span className="footer__contact-label">Contact Me</span>
          <span className="footer__pip" aria-hidden="true">|</span>
          <a href="https://github.com/RachelMizer" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            GitHub
          </a>
          <a href="https://linkedin.com/in/rachelmizer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            LinkedIn
          </a>
          <a href="mailto:rachelmizer@hotmail.com" aria-label="Send email">
            Email
          </a>
        </div>
        <span className="footer__copy">&copy; {year}</span>
      </div>
    </footer>
  )
}
