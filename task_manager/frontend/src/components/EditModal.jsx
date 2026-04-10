import { useState, useEffect } from 'react'

export default function EditModal({ isOpen, taskId, currentTitle, onSave, onClose }) {
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(currentTitle || '')
  }, [currentTitle, isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const handleSave = () => {
    if (!title.trim()) return
    onSave(taskId, title.trim())
  }

  return (
    <div
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <div className="modal-header">
          <h3>✏️ Edit Task Title</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="editTitleInput">New Title</label>
          <input
            type="text"
            id="editTitleInput"
            className="form-input"
            placeholder="Enter new title"
            maxLength={200}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            autoFocus
          />
        </div>
        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  )
}
