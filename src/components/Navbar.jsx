import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'is-scrolled' : ''}>
      <div className="nav-content">
        <Link to="/" className="logo">
          <img src="/assets/logo1.png" alt="Intelrev logo" className="logo-img" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/#solutions">Solutions</Link></li>
          <li>
            <NavLink to="/work" className={({ isActive }) => (isActive ? 'active' : '')}>
              Work
            </NavLink>
          </li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
