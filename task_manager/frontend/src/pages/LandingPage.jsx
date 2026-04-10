import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const features = [
  { icon: '✏️', title: 'Create Tasks Instantly', desc: 'Add new tasks with a unique ID, descriptive title, and completion status. Built-in validation ensures data integrity with duplicate detection and required field checks.', color: 'bento-orange', span: 'span-2', arrow: true },
  { icon: '🔄', title: 'Toggle Status', desc: 'Mark tasks as complete or incomplete with a single click. Track your progress effortlessly.', color: 'bento-white', span: 'span-row-2', style: { display: 'flex', flexDirection: 'column', justifyContent: 'center' } },
  { icon: '🔍', title: 'Smart Filtering', desc: 'Filter tasks by completion status — view all, completed, or pending tasks with instant results.', color: 'bento-green' },
  { icon: '🗑️', title: 'Clean Deletion', desc: 'Remove tasks permanently with confirmation. Keep your workspace clutter-free.', color: 'bento-purple-light' },
  { icon: '📝', title: 'Edit Task Titles', desc: 'Made a typo? Need to clarify? Update task titles anytime without losing any data. Your task history stays intact while keeping everything organized.', color: 'bento-purple', span: 'span-2', arrow: true },
  { icon: '🛡️', title: 'Robust Error Handling', desc: 'Comprehensive error responses — 400, 404, 409, 500 — so you always know what happened.', color: 'bento-white' },
]

const techStack = [
  { icon: '🟢', name: 'Node.js', bg: '#ECFDF5', color: '#065F46' },
  { icon: '⚡', name: 'Express.js', bg: '#F0EDFF', color: '#4318FF' },
  { icon: '🍃', name: 'MongoDB', bg: '#FFF3ED', color: '#C2410C' },
  { icon: '🔗', name: 'Mongoose', bg: '#EFF6FF', color: '#1D4ED8' },
  { icon: '🔧', name: 'REST API', bg: '#FDF4FF', color: '#7C3AED' },
  { icon: '📮', name: 'Postman', bg: '#FFFBEB', color: '#B45309' },
  { icon: '🐱', name: 'Git & GitHub', bg: '#F0FDF4', color: '#15803D' },
  { icon: '📦', name: 'npm', bg: '#FEF2F2', color: '#B91C1C' },
]

const endpoints = [
  { method: 'POST', path: '/api/tasks', desc: 'Create a new task with id, title, and completed status.', icon: '➕', iconBg: 'var(--green-dark)', color: 'bento-green' },
  { method: 'GET', path: '/api/tasks', desc: 'Retrieve all tasks from the database.', icon: '📋', color: 'bento-white' },
  { method: 'GET', path: '/api/tasks/filter', desc: 'Filter tasks by completion status.', icon: '🔍', iconBg: 'var(--orange-surface)', iconColor: 'var(--orange)', color: 'bento-white' },
  { method: 'PATCH', path: '/api/tasks/:id', desc: 'Update the completion status of a task.', icon: '🔄', iconBg: '#EFF6FF', iconColor: 'var(--info)', color: 'bento-white' },
  { method: 'PATCH', path: '/api/tasks/updatetitle/:id', desc: 'Update the title of a specific task.', icon: '✏️', iconBg: '#FDF4FF', iconColor: 'var(--purple-card)', color: 'bento-white' },
  { method: 'DELETE', path: '/api/tasks/:id', desc: 'Permanently delete a task by its ID.', icon: '🗑️', iconBg: 'var(--danger)', iconColor: 'white', bg: '#FEF2F2', border: '#FECACA' },
]

export default function LandingPage() {
  return (
    <div className="page-wrapper">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="container">
          <div className="hero-content animate-fade-up">
            <div className="hero-badge">
              <span className="dot"></span>
              Full-Stack Task Management
            </div>
            <h1 className="hero-title">TASK<br />MANAGER</h1>
            <p className="hero-subtitle">
              A beautifully crafted full-stack application to create, organize, update, and track your tasks with ease. Built with modern technologies.
            </p>
            <div className="hero-actions">
              <Link to="/app" className="btn btn-orange btn-lg">Launch App ↗</Link>
              <a href="#features" className="btn btn-outline btn-lg">Explore Features</a>
            </div>
            <div className="hero-stats animate-fade-up delay-3">
              <div className="hero-stat">
                <div className="hero-stat-value">6+</div>
                <div className="hero-stat-label">API Endpoints</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">CRUD</div>
                <div className="hero-stat-label">Operations</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">REST</div>
                <div className="hero-stat-label">Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES BENTO GRID ═══ */}
      <section className="bento-section" id="features">
        <div className="container">
          <div className="section-header animate-fade-up">
            <span className="pill pill-filled-purple">✦ Features</span>
            <h2>Everything you need to<br />manage your tasks</h2>
            <p>A complete task management solution with powerful features, clean API design, and a beautiful interface.</p>
          </div>
          <div className="bento-grid">
            {features.map((f, i) => (
              <div
                key={i}
                className={`bento-item ${f.color} ${f.span || ''} animate-fade-up delay-${i + 1}`}
                style={f.style}
              >
                <div className="bento-item-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                {f.arrow && <span className="arrow-link">Learn more →</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="tech-section" id="tech">
        <div className="container">
          <div className="section-header animate-fade-up">
            <span className="pill pill-filled-green">⚡ Tech Stack</span>
            <h2>Built with modern<br />technologies</h2>
            <p>Leveraging the best tools in the Node.js ecosystem for a reliable, scalable application.</p>
          </div>
          <div className="tech-pills animate-fade-up delay-2">
            {techStack.map((t, i) => (
              <span key={i} className="tech-pill" style={{ background: t.bg, color: t.color }}>
                <span className="tech-pill-icon">{t.icon}</span> {t.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ API REFERENCE ═══ */}
      <section className="bento-section" id="api" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <span className="pill pill-filled-orange">📡 API Reference</span>
            <h2>Clean RESTful<br />API design</h2>
            <p>Well-structured endpoints following REST conventions with proper HTTP methods and status codes.</p>
          </div>
          <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {endpoints.map((ep, i) => (
              <div
                key={i}
                className={`bento-item ${ep.color || ''} animate-fade-up delay-${i + 1}`}
                style={ep.bg ? { background: ep.bg, border: `1px solid ${ep.border}` } : undefined}
              >
                <div
                  className="bento-item-icon"
                  style={ep.iconBg ? { background: ep.iconBg, color: ep.iconColor || 'white' } : undefined}
                >
                  {ep.icon}
                </div>
                <h3 style={{ fontFamily: 'monospace', fontSize: '0.95rem', marginBottom: 8 }}>
                  {ep.method} {ep.path}
                </h3>
                <p>{ep.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-fade-up">
            <span style={{ display: 'block', marginBottom: 16, fontSize: '3rem', color: 'var(--orange)', fontWeight: 900 }}>✦</span>
            <h2>Ready to get<br />organized?</h2>
            <p>Start managing your tasks with a beautiful, intuitive interface. No signup required — just open and go.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/app" className="btn btn-orange btn-lg">Open Task Manager ↗</Link>
              <a href="https://github.com/gagannyadavv/task_manager" target="_blank" rel="noreferrer" className="btn btn-outline btn-lg" style={{ color: 'var(--gray-700)', borderColor: 'var(--gray-300)' }}>View on GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
