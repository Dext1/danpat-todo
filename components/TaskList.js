import React from "react";
import Task from "./Task.js";

const TaskList = ({ tasks }) => {
  return (
    <>
      <div className="list-container">
        <ul className="todo-list"></ul>
        {tasks.map((task) => (
          <Task key={task.id} name={task.name} date={task.date} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
