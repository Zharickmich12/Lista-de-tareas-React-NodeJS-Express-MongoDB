import './App.css';
import { useState } from 'react';
import { Header } from './Components/Header';
import { Tasklist } from './Components/Tasklist';
import { useTaskManager } from './useTaskManager';

const App = () => {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager(); // Usamos el hook

  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    createTask(newTaskName);
    setNewTaskName('');
  };

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <Header />
      <div className="add-task">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button className="add-button" onClick={handleAddTask}>
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>
      <Tasklist
        tasks={tasks}
        onDelete={deleteTask}
        onToggleComplete={(taskName, updatedCompleted) => updateTask(taskName, updatedCompleted)}
      />
    </div>
  );
};

export default App;