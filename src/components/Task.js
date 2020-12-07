import React from "react";

const Task = ({ name, date }) => {
  return (
    <div className="task">
      <li className="task-item">
        {name} {date}
      </li>
    </div>
  );
};

export default Task;
