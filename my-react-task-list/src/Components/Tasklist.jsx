import '../App.css';
import { Task } from './Task';

export const Tasklist = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <div className="task-list">
      <h2 className="list-title">Lista de Tareas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
          <Task
            name={task.name}
            description={task.description}
            completed={task.completed}
            onDelete={() => onDelete(task.name)}
            onToggleComplete={onToggleComplete}
          />
        </li>
        ))}
      </ul>
    </div>
  );
};