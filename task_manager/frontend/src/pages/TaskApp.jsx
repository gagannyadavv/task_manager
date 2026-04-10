import { useState, useEffect, useCallback } from 'react'
import Navbar from '../components/Navbar'
import CreateTaskPanel from '../components/CreateTaskPanel'
import TaskCard from '../components/TaskCard'
import EditModal from '../components/EditModal'
import { useToast, ToastContainer } from '../components/Toast'

const API_BASE = '/api'

export default function TaskApp() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [editModal, setEditModal] = useState({ open: false, taskId: null, title: '' })
  const { toasts, showToast } = useToast()

  // Fetch all tasks
  const fetchTasks = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/tasks`)
      const data = await res.json()
      setTasks(res.ok ? (data.tasks || []) : [])
    } catch {
      setTasks([])
      showToast('Could not connect to server', 'error')
    }
    setLoading(false)
  }, [showToast])

  useEffect(() => { fetchTasks() }, [fetchTasks])

  // Create task
  const handleCreate = async (taskData) => {
    try {
      const res = await fetch(`${API_BASE}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
      })
      const data = await res.json()
      if (res.ok) {
        showToast('Task created successfully!', 'success')
        await fetchTasks()
      } else {
        showToast(data.message || 'Failed to create task', 'error')
      }
    } catch {
      showToast('Could not connect to server', 'error')
    }
  }

  // Toggle status
  const handleToggle = async (taskId, currentStatus) => {
    try {
      const res = await fetch(`${API_BASE}/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !currentStatus })
      })
      if (res.ok) {
        showToast(`Task marked as ${!currentStatus ? 'completed' : 'incomplete'}`, 'success')
        setTasks(prev => prev.map(t => t.id === taskId ? { ...t, completed: !currentStatus } : t))
      } else {
        const data = await res.json()
        showToast(data.message || 'Failed to update task', 'error')
      }
    } catch {
      showToast('Could not connect to server', 'error')
    }
  }

  // Delete
  const handleDelete = async (taskId) => {
    if (!confirm('Are you sure you want to delete this task?')) return
    try {
      const res = await fetch(`${API_BASE}/tasks/${taskId}`, { method: 'DELETE' })
      if (res.ok) {
        showToast('Task deleted successfully', 'success')
        setTasks(prev => prev.filter(t => t.id !== taskId))
      } else {
        const data = await res.json()
        showToast(data.message || 'Failed to delete task', 'error')
      }
    } catch {
      showToast('Could not connect to server', 'error')
    }
  }

  // Edit title
  const handleSaveTitle = async (taskId, newTitle) => {
    try {
      const res = await fetch(`${API_BASE}/tasks/updatetitle/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle })
      })
      if (res.ok) {
        showToast('Title updated successfully!', 'success')
        setTasks(prev => prev.map(t => String(t.id) === String(taskId) ? { ...t, title: newTitle } : t))
        setEditModal({ open: false, taskId: null, title: '' })
      } else {
        const data = await res.json()
        showToast(data.message || 'Failed to update title', 'error')
      }
    } catch {
      showToast('Could not connect to server', 'error')
    }
  }

  // Filtered tasks
  const filteredTasks = tasks.filter(t => {
    if (filter === 'completed') return t.completed
    if (filter === 'incomplete') return !t.completed
    return true
  })

  const completedCount = tasks.filter(t => t.completed).length

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="app-layout">
        <div className="container">
          <div className="app-grid">
            <CreateTaskPanel
              onCreateTask={handleCreate}
              totalCount={tasks.length}
              completedCount={completedCount}
            />

            <section className="tasks-section animate-fade-right">
              <div className="tasks-header">
                <div className="tasks-header-left">
                  <h2>Your Tasks</h2>
                  <span className="task-count">{filteredTasks.length} task{filteredTasks.length !== 1 && 's'}</span>
                </div>
                <div className="filter-tabs">
                  {['all', 'completed', 'incomplete'].map(f => (
                    <button
                      key={f}
                      className={`filter-tab ${filter === f ? 'active' : ''}`}
                      onClick={() => setFilter(f)}
                    >
                      {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {loading ? (
                <div className="empty-state" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="spinner" style={{ width: 40, height: 40, borderWidth: 3 }}></div>
                  <p style={{ marginTop: 16, color: 'var(--gray-500)' }}>Loading tasks...</p>
                </div>
              ) : filteredTasks.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">📭</div>
                  <h3>No tasks yet</h3>
                  <p>Create your first task using the panel on the left!</p>
                </div>
              ) : (
                <div className="tasks-list">
                  {filteredTasks.map((task, i) => (
                    <TaskCard
                      key={task.id || task._id}
                      task={task}
                      onToggle={handleToggle}
                      onEdit={(id, title) => setEditModal({ open: true, taskId: id, title })}
                      onDelete={handleDelete}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <EditModal
        isOpen={editModal.open}
        taskId={editModal.taskId}
        currentTitle={editModal.title}
        onSave={handleSaveTitle}
        onClose={() => setEditModal({ open: false, taskId: null, title: '' })}
      />

      <ToastContainer toasts={toasts} />
    </div>
  )
}
