import { Link } from 'react-router-dom'
import profpic from '../assets/img/profpic2.png'
import './Home.css'

export default function Home() {
  return (
    <div className="home page-fade">
      <section className="hero section" aria-label="Introduction">
        <div className="container">
          <div className="hero__layout">
            <div className="hero__text">
              <h1 className="hero__name">Rachel Mizer</h1>
              <p className="hero__eyebrow"><span style={{color:'#2d4a73'}}>Rachel Mizer</span> | Full-Stack Developer &amp; UI/UX Designer</p>
              <p className="hero__tagline">
                I build clean, accessible web experiences — from component design to API integration — with a focus on clarity, usability, and thoughtful detail.
              </p>
              <p className="hero__thankyou">
                Thank you for taking the time to visit. Whether you&rsquo;re here out of curiosity, considering working together, or just passing through — I&rsquo;m genuinely glad you stopped by.
              </p>
              <div className="hero__actions">
                <Link to="/portfolio" className="btn btn--primary">View My Work</Link>
                <Link to="/about" className="btn btn--secondary">About Me</Link>
              </div>
            </div>
            <div className="hero__image-wrap">
              <img src={profpic} alt="Rachel Mizer" className="hero__photo" />
            </div>
          </div>
        </div>
      </section>

      <section className="highlights section" aria-label="Skills overview">
        <div className="container">
          <h2 className="highlights__heading">What I Do</h2>
          <div className="highlights__grid">
            <div className="highlight-card">
              <div className="highlight-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h2>Full-Stack Development</h2>
              <p>JavaScript, React, Vue, Python, Django, REST APIs — comfortable across the entire stack from database to interface.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <h2>UI/UX Design</h2>
              <p>Responsive layouts, component-based design, and WCAG 2.2+ accessibility — building interfaces that are both beautiful and inclusive.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h2>Data &amp; Dashboards</h2>
              <p>Data-driven interfaces, Tableau, Power BI, and dashboard design — translating complex data into actionable, readable views.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section" aria-label="Call to action">
        <div className="container">
          <div className="cta-card">
            <pre className="cta-card__code" aria-hidden="true">{`from django.db import models
from django.http import JsonResponse
from django.contrib.auth.models import User

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE
    )

    def __str__(self):
        return self.title

def get_project_data(request, project_id):
    try:
        project = Project.objects.get(
            id=project_id
        )
        return JsonResponse({
            'title': project.title,
            'description': project.description,
            'author': project.author.username,
        })
    except Project.DoesNotExist:
        return JsonResponse(
            {'error': 'Not found'}, status=404
        )`}</pre>
            <p className="cta-card__joke"><span className="cta-card__scratch">My skills are for sale!</span></p>
            <h2>Let&rsquo;s work together!</h2>
            <p>Currently open to new opportunities. Whether you&rsquo;re looking for a developer, a designer, or someone who can do both — I&rsquo;d love to hear about your project or role.</p>
            <Link to="/contact" className="btn btn--primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
