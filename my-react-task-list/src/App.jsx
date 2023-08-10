import './App.css';
import { useState } from 'react';
import { Header } from './Components/Header';
import { Tasklist } from './Components/Tasklist';

const App = () => {
  const [tasks, setTasks] = useState([
      { name: 'Tarea 1', completed: false },
      { name: 'Tarea 2', completed: true },
      { name: 'Tarea 3', completed: false },
  ]);
  const [newTaskName, setNewTaskName] = useState('');

  const handleDeleteTask = (taskName) => {
      setTasks(tasks.filter(task => task.name !== taskName));
  };

  const handleToggleComplete = (taskName) => {
      setTasks(tasks.map(task => task.name === taskName ? { ...task, completed: !task.completed } : task));
  };

  const handleAddTask = () => {
      if (newTaskName.trim() !== '') {
          setTasks([...tasks, { name: newTaskName, completed: false }]);
          setNewTaskName('');
      }
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
              <span class="material-symbols-outlined">add_circle</span> 
                </button>
          </div>
          <Tasklist
              tasks={tasks}
              onDelete={handleDeleteTask}
              onToggleComplete={handleToggleComplete}
          />
      </div>
  );
};

export default App;