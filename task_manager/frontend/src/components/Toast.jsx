import { useState, useCallback } from 'react'

let toastId = 0

export function useToast() {
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((message, type = 'info') => {
    const id = ++toastId
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3500)
  }, [])

  return { toasts, showToast }
}

export function ToastContainer({ toasts }) {
  const icons = { success: '✅', error: '❌', info: 'ℹ️' }

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{icons[toast.type]}</span>
          <span className="toast-message">{toast.message}</span>
        </div>
      ))}
    </div>
  )
}
