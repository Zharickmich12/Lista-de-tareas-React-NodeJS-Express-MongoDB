import { useState, useEffect } from 'react';

export const useTaskManager = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(storedTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (newTaskName) => {
    if (newTaskName.trim() !== '') {
      setTasks([...tasks, { name: newTaskName, completed: false }]);
    }
  };

  const deleteTask = (taskName) => {
    setTasks(tasks.filter(task => task.name !== taskName));
  };

  const toggleComplete = (taskName, updatedCompleted) => {
    const updatedTasks = tasks.map(task => {
      if (task.name === taskName) {
        return { ...task, completed: updatedCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return {
    tasks,
    createTask,
    deleteTask,
    toggleComplete,
  };
};