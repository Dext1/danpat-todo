import React from "react";
import axios from "axios";
import TestiYkss from "./TestiYkss.js";
//import ChangeView from "./ChangeView.js";

export default class MainThing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  todoDataChanged = (id, title) => {
    let newTasks = [];
    const l = this.state.tasks.length;
    for (let i = 0; i < l; i++) {
      let newTask = { ...this.state.tasks[i] };
      if (newTask.id === id) {
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
    const textInput = this.state.tasks.map((t) => (
      <TestiYkss
        task={t}
        changeCallback={this.todoDataChanged}
        key={t.id.toString()}
      />
    ));
    /*const kikkeli = this.state.tasks.map((t) => (
      <ChangeView
        task={t}
        changeCallback={this.todoDataChanged}
        key={t.id.toString()}
      />
    ));*/
    return (
      <>
        <div class="container" id="root">
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
            <p class="input_ykss">{textInput}</p>
            <button class="insert_button" onClick={this.addTask}>
              Lisää tehtävä
            </button>
          </div>
          <div class="add_task">Lisää tehtävä</div>
          <div class="search_task">Etsi tehtäviä</div>
        </div>
      </>
    );
  }
}
