import React from "react";
import TaskItem from "./Task";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </div>
  );
};

export default TaskList;