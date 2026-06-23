import './Contact.css'

export default function Contact() {
  return (
    <div className="contact page-fade">
      <section className="contact-hero section">
        <div className="container">
          <div className="contact-hero__inner">
            <pre className="contact-hero__code" aria-hidden="true">{`<!-- reach out, I don't bite -->
<section class="lets-talk">
  <h1>Hello!</h1>
  <p>I'm Rachel — let's build
     something great together.</p>
</section>

.availability {
  status: open;
  response-time: fast;
  enthusiasm: high;
}

const contact = {
  email: 'rachelmizer@hotmail.com',
  linkedin: '/in/rachelmizer',
  vibe: 'collaborative',
  readyToStart: true,
}`}</pre>

            <div className="contact-hero__content">
              <div className="contact-status">
                <span className="contact-status__dot" aria-hidden="true" />
                <span>Open to opportunities</span>
              </div>

              <h1 className="page-title">Let&rsquo;s Connect</h1>

              <p className="contact-intro">
                I&rsquo;m currently open to new roles and freelance opportunities. Whether you have a project in mind or just want to say hello — my inbox is always open.
              </p>
              <p className="contact-note">
                The best way to start a conversation is just to say hello. I read every message personally and I&rsquo;ll always write back.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-content section" aria-label="Contact information">
        <div className="container">
          <div className="contact-grid">

            <div className="contact-card">
              <div className="contact-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-card__body">
                <h2 className="contact-card__label">Email</h2>
                <a href="mailto:rachelmizer@hotmail.com" className="contact-card__value">
                  rachelmizer@hotmail.com
                </a>
                <p className="contact-card__note">Best way to reach me</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="contact-card__body">
                <h2 className="contact-card__label">LinkedIn</h2>
                <a href="https://linkedin.com/in/rachelmizer" target="_blank" rel="noopener noreferrer" className="contact-card__value">
                  linkedin.com/in/rachelmizer
                </a>
                <p className="contact-card__note">Connect professionally</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
