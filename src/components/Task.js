import React from "react";
import axios from "axios";
import { baseUrl } from "../App.js";
const moment = require("moment");

export const formatDate = (date, format) => {
  if (date !== null) {
    return moment(date).format(format);
  } else return null;
};

const Task = ({
  id,
  title,
  due_date,
  priority,
  is_done,
  tag,
  setTaskValues,
  setShowEditForm,
  showEditForm,
  setHeader,
  showForm,
  trigger,
  setTrigger,
}) => {
  const completeHandler = async () => {
    await axios.put(`${baseUrl}/${id}`, {
      id: id,
      is_done: !is_done,
      title: title,
      due_date: due_date,
      priority: priority,
      tag: tag,
    });
    setTrigger(!trigger);
  };
  const getValuesHandler = (e) => {
    e.preventDefault();
    if (!showEditForm && !showForm) {
      setTaskValues({
        id: id,
        is_done: is_done,
        title: title,
        due_date: due_date,
        priority: priority,
        tag: tag,
      });
      setShowEditForm(true);
      setHeader("Edit Task");
    }
  };
  return (
    <li className="task">
      <button
        onClick={completeHandler}
        className={!is_done ? "complete-button no" : "complete-button yes"}
      >
        {!is_done ? "No" : "Yes"}
      </button>
      <span onClick={getValuesHandler} className="taskTitle">
        {title}
      </span>
      <span onClick={getValuesHandler} className="taskDate">
        {formatDate(due_date, "DD-MM-YYYY")}
      </span>
      <span onClick={getValuesHandler} className="taskPriority">
        {priority}
      </span>
    </li>
  );
};

export default Task;
