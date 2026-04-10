export default function TaskCard({ task, onToggle, onEdit, onDelete }) {
  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <div
        className={`task-checkbox ${task.completed ? 'checked' : ''}`}
        onClick={() => onToggle(task.id, task.completed)}
        role="checkbox"
        aria-checked={task.completed}
        title="Toggle status"
      >
        {task.completed ? '✓' : ''}
      </div>
      <div className="task-info">
        <div className="task-id-badge">ID: {task.id}</div>
        <div className="task-title">{task.title}</div>
        <span className={`task-status ${task.completed ? 'status-complete' : 'status-incomplete'}`}>
          <span style={{ fontSize: '0.65rem' }}>{task.completed ? '●' : '○'}</span>
          {task.completed ? 'Completed' : 'Incomplete'}
        </span>
      </div>
      <div className="task-actions">
        <button
          className="task-action-btn edit"
          onClick={() => onEdit(task.id, task.title)}
          title="Edit title"
          aria-label="Edit task title"
        >
          ✏️
        </button>
        <button
          className="task-action-btn delete"
          onClick={() => onDelete(task.id)}
          title="Delete task"
          aria-label="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}
