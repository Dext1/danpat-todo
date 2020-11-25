import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput.js";
import TaskList from "./components/TaskList.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <TaskList tasks={tasks} />
      <TaskInput
        inputText={inputText}
        setInputText={setInputText}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
