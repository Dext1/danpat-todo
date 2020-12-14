import React from "react";
import Priority from "./Priority.js";
import ChooseDate from "./ChooseDate.js";
const moment = require("moment");
let id = 0;

const TaskInput = ({
  inputText,
  setInputText,
  tasks,
  setTasks,
  onRemove,
  setVisible,
  dueDate,
  setHeader,
}) => {
  const stringifiedDate = moment(dueDate).format("DD-MM-YYYY");

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const saveTaskHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { name: inputText, date: stringifiedDate, id: id++ }]);
    setVisible(false);
    setHeader("All");
  };
  return (
    <form className="new-task">
      <div class="due_date input">
        Deadline
        <ChooseDate />
      </div>
      <div class="priority input">
        Priority
        <Priority />
      </div>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="text input"
      />
      <button onClick={saveTaskHandler} className="save-button" type="submit">
        Save
      </button>
    </form>
  );
};

export default TaskInput;
