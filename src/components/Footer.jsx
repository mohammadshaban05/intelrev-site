export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/assets/logo1.png" alt="Intelrev logo" className="footer-logo-img" />
          </div>
          <span className="footer-copy">© 2026 Intelrev</span>
        </div>
        <div className="footer-links">
          <a href="mailto:contact@intelrev.net">contact@intelrev.net</a>
          <a href="https://linkedin.com/company/intelrev-solutions" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        Engineering intelligent systems, automation pipelines, and applied AI.
      </div>
    </footer>
  )
}
