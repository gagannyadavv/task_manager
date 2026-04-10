export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <span>📋</span> TaskManager
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#tech">Tech Stack</a>
          <a href="#api">API</a>
          <a href="https://github.com/gagannyadavv/task_manager" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div style={{ color: 'var(--gray-500)', fontSize: '0.85rem' }}>
          Built by <strong>Gagan Yadav</strong>
        </div>
      </div>
    </footer>
  )
}
