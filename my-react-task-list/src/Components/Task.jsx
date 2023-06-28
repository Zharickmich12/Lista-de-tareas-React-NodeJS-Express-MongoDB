import React from "react";

const TaskItem = ({ task, toggleTask }) => {
  const { id, description, completed } = task;

  const handleToggle = () => {
    toggleTask(id);
  };

  return (
    <div className="task-item">
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <span className={completed ? "completed" : ""}>{description}</span>
    </div>
  );
};

export default TaskItem;