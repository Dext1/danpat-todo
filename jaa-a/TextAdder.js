import React from "react";
import axios from "axios";
import TaskVault from "./TaskVault.js";
import TextField from "./TextField.js";

export default class TextAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priorityOptions: [0, 1, 2, 3, 4, 5],
      tasks: [],
      backendAddress: "http://127.0.0.1:4011/tasks",
    };
  }

  connectBackEnd = () => {
    axios.get(this.state.backendAddress).then(
      (response) => {
        this.setState({ tasks: response.data });
      },
      (error) => {
        alert("Eroorororo: " + error);
      }
    );
  };

  todoDataChanged = (id, isDone_spe, title, dueDate_spe, priority_spe) => {
    let newTasks = [];
    const l = this.state.tasks.length;
    for (let i = 0; i < l; i++) {
      let newTask = { ...this.state.tasks[i] };
      if (newTask.id === id) {
        newTask.isDone = isDone_spe;
        newTask.dueDate = dueDate_spe;
        newTask.priority = priority_spe;
        newTask.title = title;
      }
      newTasks.push(newTask);
    }
    this.setState({ tasks: newTasks });
  };

  componentDidMount() {
    this.connectBackEnd();
  }

  addTask = () => {
    fetch(this.state.backendAddress, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "",
        isDone: "0",
        dueDate: "1",
        priority: "1",
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ tasks: [...this.state.tasks, data] });
      });
  };

  saveAll = () => {
    const l = this.state.tasks.length;
    for (let i = 0; i < l; i++) {
      let task = this.state.tasks[i];
      axios.put(this.state.backendAddress + "/" + task.id, task).then(
        (resp) => {
          console.log(resp);
        },
        (e) => {
          console.log(e);
        }
      );
    }
  };

  render() {
    const rows = this.state.tasks.map((t) => (
      <TaskVault
        task={t}
        changeCallback={this.todoDataChanged}
        removeRowCallback={this.removeRow}
        priorityOptions={this.state.priorityOptions}
        key={t.id.toString()}
      />
    ));
    const textInput = this.state.tasks.map((t) => (
      <TextField
        task={t}
        changeCallback={this.todoDataChanged}
        key={t.id.toString()}
      />
    ));
    return (
      <>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Student</th>
              <th>ECMA Essentials</th>
              <th>React</th>
              <th>Usability</th>
              <th>UI Technics</th>
              <th>Total Grade</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <button onClick={this.saveAll}>Save all</button>
        <button onClick={this.addTask}>Lisää tehtävä</button>
        <div class="container">
          <div class="header">Kaikki</div>
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
            <i>{textInput}</i> <button class="insert_button">Etsi</button>
          </div>
          <div class="add_task">Lisää tehtävä</div>
          <div class="search_task">Etsi tehtäviä</div>
        </div>
      </>
    );
  }
}
