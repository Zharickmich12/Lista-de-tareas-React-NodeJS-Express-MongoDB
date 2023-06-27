import './Styles.css';
import { Task } from './Task';

export const Tasklist = ({ tasks }) => {
    return (
        <div className="task-list">
            <h2 className="list-title">Lista de Tareas</h2>
            <ul>
                {tasks.map((tasks, index) => (
                    <li key={index}>
                        <Task name={tasks.name} completed={tasks.completed}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};