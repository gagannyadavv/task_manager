import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  if (!isLanding) {
    return (
      <nav className="app-navbar">
        <div className="container">
          <div className="app-nav-left">
            <Link to="/" className="back-link">← Home</Link>
            <span className="app-title">📋 Task Manager</span>
          </div>
          <div className="app-nav-right">
            <span className="pill" style={{ color: 'var(--gray-700)', background: 'var(--gray-100)' }}>
              <span style={{ width: 8, height: 8, background: 'var(--green)', borderRadius: '50%', display: 'inline-block' }}></span>
              API Ready
            </span>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-icon">📋</span>
          TaskManager
        </Link>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#tech">Tech Stack</a>
          <a href="#api">API</a>
          <Link to="/app" className="nav-cta">Open App ↗</Link>
        </div>
      </div>
    </nav>
  )
}
