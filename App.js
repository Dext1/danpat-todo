import React, { useState } from "react";
import "./scss/index.scss";
import ChangeView from "./ChangeView.js";
import ChangeView2 from "./ChangeView2.js";
import TaskInput from "./components/TaskInput.js";
import TaskList from "./components/TaskList.js";
import DropDown from "./components/DropDown.js";
import ChooseDate from "./components/ChooseDate.js";
import VerticalToggleButtons from "./components/Toggle.js";
//import ChangeView3 from "./ChangeView3.js";
//import TaskRemove2 from "./components/TaskRemove2.js";
//import TaskRemove from "./components/TaskRemove.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <>
        <div class="container" id="root">
          <div class="header">Kaikki</div>
          <div class="side_menu">
            <ul>
              <li id="">
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
            <ChooseDate />
          </div>
          <div class="priority">
            Pri
            <hr />
            <DropDown />
          </div>
          <div class="input_field">
            <p class="input_ykss">
              <TaskInput
                inputText={inputText}
                setInputText={setInputText}
                tasks={tasks}
                setTasks={setTasks}
              />
            </p>
          </div>
          <div class="add_task" id="add_task">
            <VerticalToggleButtons />
          </div>
          <div class="search_task" id="search_task">
            <ChangeView />
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
