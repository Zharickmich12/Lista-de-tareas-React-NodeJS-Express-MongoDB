import '../App.css';

export const Task = ({ name, completed, onDelete, onToggleComplete }) => {
  const handleCheckboxChange = () => {
    onToggleComplete(name, !completed);
  };

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
      <span>{name}</span>
      <button className="delete-button" onClick={() => onDelete(name)}>
        <span class="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
};