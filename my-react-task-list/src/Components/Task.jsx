import '../App.css';

export const Task = ({ name, description, completed, onDelete, onToggleComplete }) => {
  const handleCheckboxChange = () => {
    onToggleComplete(name, !completed);
  };

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
      <div className="task-content">
        <span className="task-name">{name}</span>
        <p className="task-description">{description}</p>
      </div>
      <button className="delete-button" onClick={() => onDelete(name)}>
        <span class="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
};