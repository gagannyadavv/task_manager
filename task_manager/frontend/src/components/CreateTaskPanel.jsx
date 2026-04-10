import { useState } from 'react'

export default function CreateTaskPanel({ onCreateTask, totalCount, completedCount }) {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState('false')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!id || !title.trim()) return
    setLoading(true)
    await onCreateTask({
      id: parseInt(id),
      title: title.trim(),
      completed: completed === 'true'
    })
    setId('')
    setTitle('')
    setCompleted('false')
    setLoading(false)
  }

  return (
    <aside className="create-panel animate-fade-left">
      <div className="create-panel-header">
        <div className="icon-circle">✏️</div>
        <div>
          <h3>Create New Task</h3>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--gray-500)' }}>Add a task to your list</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="taskId">Task ID</label>
          <input
            type="number"
            id="taskId"
            className="form-input"
            placeholder="Enter unique ID (e.g., 1)"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            min="1"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="taskTitle">Task Title</label>
          <input
            type="text"
            id="taskTitle"
            className="form-input"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength={200}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="taskStatus">Status</label>
          <select
            id="taskStatus"
            className="form-select"
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}
          >
            <option value="false">⏳ Incomplete</option>
            <option value="true">✅ Completed</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary create-btn" disabled={loading}>
          {loading ? (
            <><span className="spinner" style={{ width: 18, height: 18, borderWidth: 2, display: 'inline-block' }}></span> Creating...</>
          ) : 'Create Task'}
        </button>
      </form>

      {/* Quick Stats */}
      <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--gray-100)' }}>
        <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--gray-700)', marginBottom: '0.5rem' }}>Quick Stats</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          <div style={{ background: 'var(--primary-surface)', padding: 12, borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary)' }}>{totalCount}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>Total</div>
          </div>
          <div style={{ background: 'var(--green-surface)', padding: 12, borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--green-dark)' }}>{completedCount}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>Done</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
