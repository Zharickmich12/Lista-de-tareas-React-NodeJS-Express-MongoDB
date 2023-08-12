import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Tasklist } from './Components/Tasklist';
import { useTaskManager } from './useTaskManager';
import Home from './Components/Home';
import SobreNosotros from './Components/SobreNosotros';
import Menu from './Components/Menu';

const App = () => {
  const { tasks, createTask, deleteTask, toggleComplete } = useTaskManager();

  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    if (newTaskName.trim().length >= 3) {
      createTask(newTaskName, newTaskDescription);
      setNewTaskName('');
      setNewTaskDescription('');
    } else {
      alert("El nombre de la tarea debe tener al menos 3 caracteres.");
    }
  };

  return (
    <Router>
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <Header />
        <Menu />
        <div className="add-task">
          <input
            type="text"
            placeholder="Nueva tarea"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descripción (opcional)"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          <button className="add-button" onClick={handleAddTask}>
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tareas" element={<Tasklist tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;