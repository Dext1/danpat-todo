import React, { useState } from "react";
import "./scss/index.scss";
import ChangeView from "./ChangeView.js";
import TaskInput from "./components/TaskInput.js";
import TaskList from "./components/TaskList.js";
//import TaskRemove2 from "./components/TaskRemove2.js";
//import TaskRemove from "./components/TaskRemove.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [header, setHeader] = useState("All");
  const [tasks, setTasks] = useState([]);
  const [visible, setVisible] = useState(false);

  const addTaskHandler = () => {
    setVisible(true);
    setHeader("Add Task");
  };
  return (
    <div className="App">
      <>
        <div class="container" id="root">
          <div class="header">{header}</div>
          <div class="side_menu">
            <ul>
              <li>
                <a class="side_items" href="#home">
                  Kategoriat
                </a>
              </li>
              <li>
                <a href="#this">Kaikki</a>
              </li>
              <li>
                <a href="#that">Tehty</a>
              </li>
              <li>
                <a href="#this">#Koulu</a>
              </li>
            </ul>
          </div>
          <div class="done">
            Tehty
            <hr />
          </div>
          <div class="main">
            Tehtävä
            <hr />
            <TaskList tasks={tasks} />
          </div>
          <div class="due_date">
            Määräaika
            <hr />
          </div>
          <div class="priority">
            Pri
            <hr />
          </div>
          <div class="input_field">
            <p class="input_ykss">
              {visible && (
                <TaskInput
                  inputText={inputText}
                  setInputText={setInputText}
                  tasks={tasks}
                  setTasks={setTasks}
                  setVisible={setVisible}
                  setHeader={setHeader}
                />
              )}
            </p>
          </div>
          <div class="add_task">
            <button onClick={addTaskHandler} className="tab-button">
              Add task
            </button>
          </div>
          <div class="search_task">
            <ChangeView />
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
