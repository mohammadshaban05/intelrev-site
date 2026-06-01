import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'

const projects = [
  {
    href: 'https://creativemeat.net',
    imageClass: 'project-image project-image-meat',
    domain: 'creativemeat.net',
    title: 'Creative Meat',
    summary: 'Client website designed and shipped end-to-end: layout, content, and deployment.',
    preview: (
      <div className="preview-content">
        <span className="preview-label">Creative Meat</span>
        <div className="preview-line preview-line-wide" />
        <div className="preview-line" />
        <div className="preview-button" />
      </div>
    ),
  },
  {
    href: 'https://abdelhadi-shaban-resume.vercel.app/',
    imageClass: 'project-image project-image-resume',
    domain: 'abdelhadi-shaban-resume.vercel.app',
    title: 'Abdelhadi Shaban Resume Site',
    summary: 'Personal resume site built and deployed on Vercel. Clean, responsive, content-driven.',
    preview: (
      <div className="preview-content">
        <span className="preview-label">Resume Site</span>
        <div className="preview-line preview-line-wide" />
        <div className="preview-line" />
        <div className="preview-grid">
          <span />
          <span />
          <span />
        </div>
      </div>
    ),
  },
]

export default function Work() {
  return (
    <>
      <section className="work-hero">
        <div className="container">
          <span className="section-eyebrow">Some Our work</span>
          <h1>
            Systems built, shipped,
            <br />
            and running in production.
          </h1>
          <p>
            Websites, automation pipelines, and AI-enabled systems we've designed and deployed.
          </p>
        </div>
      </section>

      <section className="work-grid-section">
        <div className="container">
          <div className="work-grid">
            {projects.map((p, i) => (
              <Reveal as="article" className="project-card" delay={i * 90} key={p.href}>
                <a className="project-link" href={p.href} target="_blank" rel="noopener noreferrer">
                  <div className={p.imageClass} aria-hidden="true">
                    <div className="preview-window">
                      <div className="preview-bar">
                        <span />
                        <span />
                        <span />
                      </div>
                      {p.preview}
                    </div>
                  </div>
                  <div className="project-body">
                    <div className="project-domain">{p.domain}</div>
                    <h3>{p.title}</h3>
                    <p className="project-summary">{p.summary}</p>
                    <span className="project-visit">
                      <span>Visit site</span>
                      <Icon name="external-link" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container contact-centered">
          <Reveal>
            <h2>Have something you want built?</h2>
            <p>
              Want to automate a workflow, replace a manual process, or ship a production system?
              Let's talk.
            </p>
            <a href="mailto:contact@intelrev.net" className="btn-primary">
              <Icon name="mail" />
              <span>contact@intelrev.net</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
