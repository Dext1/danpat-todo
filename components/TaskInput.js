import React from "react";
import TaskRemove from "./TaskRemove.js";
let id = 0;

const TaskInput = ({ inputText, setInputText, tasks, setTasks, onRemove }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const saveTaskHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { name: inputText, date: "today", id: id++ }]);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={saveTaskHandler} className="save-button" type="submit">
        Save
      </button>
      <div className="task">
        <span>{tasks.name}</span>
        <button onClick={onRemove}>Remove</button>
      </div>
    </form>
  );
};

export default TaskInput;
