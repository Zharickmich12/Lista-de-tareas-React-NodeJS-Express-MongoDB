import React, { useState, useEffect } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/Tasklist";
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);
    
      const addTask = (description) => {
        const newTask = {
          id: Date.now(),
          description,
          completed: false,
        };
        setTasks([...tasks, newTask]);
      };
    
      const toggleTask = (taskId) => {
        const updatedTasks = tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        setTasks(updatedTasks);
      };
    
      return (
        <div className="app">
          <h1>Task List</h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} toggleTask={toggleTask} />
        </div>
      );
}

export default App;