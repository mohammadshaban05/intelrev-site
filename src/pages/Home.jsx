import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import ShaderHero from '../components/ShaderHero.jsx'

const focusAreas = [
  { icon: 'layout', title: 'Web systems', text: 'Frontends that qualify, capture, and route demand.' },
  { icon: 'workflow', title: 'Automation pipelines', text: 'Connected forms, CRMs, sheets, APIs, and alerts.' },
  { icon: 'brain', title: 'AI-enabled workflows', text: 'Review, triage, and assistance inside the process.' },
]

const capabilities = [
  {
    icon: 'layout',
    title: 'Operational websites',
    text: 'Frontends that look high-trust and do real work: capture demand, qualify inquiries, feed connected flows.',
    points: ['Service sites and landing pages', 'Forms, qualification, and routing', 'Responsive build and launch'],
  },
  {
    icon: 'workflow',
    title: 'Workflow automation',
    text: 'Systems that connect sites, CRMs, sheets, and APIs so manual steps become automated sequences.',
    points: ['Lead and intake workflows', 'Backend orchestration with n8n + APIs', 'Notifications, handoffs, tracking'],
  },
  {
    icon: 'brain',
    title: 'AI-enabled operations',
    text: 'Practical AI added where it improves speed or clarity, not decoration bolted on the side.',
    points: ['Document and intake review', 'Internal assistance and triage', 'AI steps inside usable systems'],
  },
]

const steps = [
  { icon: 'search', title: 'Map the problem', text: 'We look at the workflow, bottlenecks, handoffs, and where the process breaks.' },
  { icon: 'compass', title: 'Design the system', text: 'We define structure, logic, automation, and integrations that make it usable.' },
  { icon: 'plug', title: 'Build and connect', text: 'Frontend, backend logic, and automation ship as one connected delivery.' },
  { icon: 'sliders', title: 'Refine after launch', text: 'Once live, we tune for clarity, speed, and reliability from real usage.' },
]

const principles = [
  ['Stack choice', 'Use what fits the workflow'],
  ['Automation', 'Only where it removes real friction'],
  ['Design', 'Clean enough to earn trust fast'],
  ['Delivery', 'Build for the version that has to run'],
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <ShaderHero />
        <div className="container hero-shell">
          <div className="hero-copy">
            <span className="hero-kicker">AI automation systems</span>
            <h1>Websites and workflows that remove manual work.</h1>
            <p className="hero-subheading">
              Premium sites, automation, and AI-assisted systems for teams that want cleaner
              operations, without more tools to manage.
            </p>
            <div className="hero-actions">
              <Link to="/#contact" className="btn-primary">
                <span>Start a project</span>
                <Icon name="arrow-right" />
              </Link>
              <Link to="/work" className="btn-secondary">
                <Icon name="briefcase" />
                <span>See recent work</span>
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <img src="/assets/logo1.png" alt="" className="panel-logo" />
            <span className="panel-label">Focus areas</span>
            <div className="panel-list">
              {focusAreas.map((f) => (
                <div className="panel-item" key={f.title}>
                  <Icon name={f.icon} className="panel-icon" />
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="solutions">
        <div className="container">
          <Reveal className="section-heading">
            <span className="section-eyebrow">Capabilities</span>
            <h2 className="section-title">What we design and ship</h2>
            <p className="section-intro">
              The website matters, but the value is the system behind it: intake, routing,
              automation, and cleaner operations.
            </p>
          </Reveal>

          <div className="cards">
            {capabilities.map((c, i) => (
              <Reveal as="article" className="card" delay={i * 80} key={c.title}>
                <div className="card-icon">
                  <Icon name={c.icon} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ul className="card-points">
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions work-band" id="work-preview">
        <div className="container">
          <Reveal className="split-heading">
            <div>
              <span className="section-eyebrow section-eyebrow-left">Selected work</span>
              <h2 className="section-title section-title-left">Systems with real business utility</h2>
              <p className="section-intro section-intro-left">
                Recent work across websites, automation flows, and internal systems.
              </p>
            </div>
            <Link to="/work" className="btn-secondary">
              <span>View all work</span>
              <Icon name="arrow-right" />
            </Link>
          </Reveal>

          <div className="feature-grid">
            <Reveal as="article" className="feature-card feature-card-wide">
              <span className="feature-tag">Website + automation</span>
              <h3>Live registration + backend automation platform</h3>
              <p>
                A public registration flow wired to backend workflows for real-time processing
                and clean handoff.
              </p>
              <div className="feature-points">
                <span>Real-time data</span>
                <span>Workflow orchestration</span>
                <span>Production deploy</span>
              </div>
            </Reveal>

            <Reveal as="article" className="feature-card" delay={80}>
              <span className="feature-tag">Client delivery</span>
              <h3>Marketing sites with operational plumbing</h3>
              <p>Premium sites backed by forms, integrations, and structured flows.</p>
            </Reveal>

            <Reveal as="article" className="feature-card" delay={160}>
              <span className="feature-tag">Internal systems</span>
              <h3>Tools that cut repetitive admin</h3>
              <p>Connected dashboards and AI-assisted steps that help teams move faster.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container process-shell">
          <Reveal className="process-copy">
            <span className="section-eyebrow section-eyebrow-left">Delivery model</span>
            <h2 className="section-title section-title-left">From problem to working system</h2>
            <p className="section-intro section-intro-left">
              Not more tools. Understand the workflow, design the right structure, and ship
              something stable enough to run.
            </p>
          </Reveal>

          <div className="process-steps">
            {steps.map((s, i) => (
              <Reveal as="div" className="step" delay={i * 70} key={s.title}>
                <div className="step-icon">
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="why-intelrev">
        <div className="container">
          <div className="why-content">
            <Reveal className="why-text">
              <span className="section-eyebrow section-eyebrow-left">Why Intelrev</span>
              <h2>Built with engineering judgment, not presentation-layer fluff.</h2>
              <p>
                We treat websites and automation like operating systems for the business: what
                happens, where data goes, and how it behaves once live.
              </p>
              <ul>
                {[
                  'No-code, custom code, or AI, only where each fits',
                  'Built for reliability, maintainability, and clean handoff',
                  'Premium visuals that stay connected to operations',
                ].map((t) => (
                  <li key={t}>
                    <Icon name="check" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="why-graphic" delay={120}>
              <div className="principle-card">
                <span className="system-mini-label">Operating principles</span>
                {principles.map(([label, value]) => (
                  <div className="principle-row" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <Reveal className="contact-panel">
            <div className="contact-copy">
              <span className="section-eyebrow section-eyebrow-left">Start a project</span>
              <h2>Need a system that does more than look good?</h2>
              <p>
                Send the workflow, pain point, or idea. We'll map the system and turn it into
                something usable in production.
              </p>
            </div>
            <div className="contact-actions">
              <a href="mailto:contact@intelrev.net" className="btn-primary">
                <Icon name="mail" />
                <span>contact@intelrev.net</span>
              </a>
              <p className="contact-note">
                Best for service businesses, ops-heavy teams, client delivery systems, and
                internal tools.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
