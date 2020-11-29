import React from "react";

export default class TestiYkss extends React.Component {
  handleTitleChange = (e) => {
    const title = e.target.value;
    this.props.changeCallback(this.props.task.id, title);
  };

  render() {
    return (
      <p>
        <input
          type="text"
          class="task_field"
          placeholder="Lisää tehtävä"
          onChange={this.handleNameChange}
        ></input>
      </p>
    );
  }
}
