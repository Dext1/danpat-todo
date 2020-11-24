import React from "react";

export default class TaskVault extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone_spe: props.task.isDone,
      dueDate_spe: props.task.dueDate,
      priortity_spe: props.task.priority,
    };
  }

  handleGradeChange = async (gradeType, e) => {
    await this.setState({ [gradeType]: e.target.value });
    this.props.changeCallback(
      this.props.task.id,
      document.getElementById(this.props.task.id.toString()).value,
      this.state.isDone_spe,
      this.state.dueDate_spe,
      this.state.priortity_spe
    );
  };

  handleTitleChange = (e) => {
    const title = e.target.value;
    this.props.changeCallback(
      this.props.task.id,
      title,
      this.state.isDone_spe,
      this.state.dueDate_spe,
      this.state.priortity_spe
    );
  };

  componentDidMount() {
    document.getElementById(
      this.props.task.id.toString()
    ).value = this.props.task.title;
  }

  componentDidUpdate() {
    document.getElementById(
      this.props.task.id.toString()
    ).value = this.props.task.title;
  }

  render() {
    let optionElements = this.props.priorityOptions.map((o) => (
      <option key={o.toString()} value={o}>
        {o}
      </option>
    ));
    let selectTdElements = ["isDone_spe", "dueDate_spe", "prioirity_spe"].map(
      (part) => (
        <td key={part}>
          <select
            value={this.state[part]}
            onChange={(e) => this.handleGradeChange(part, e)}
          >
            {optionElements}
          </select>
        </td>
      )
    );

    return (
      <tr>
        <td>
          <button
            onClick={() => this.props.removeRowCallback(this.props.task.id)}
          >
            Remove student
          </button>
        </td>
        <td>
          <input
            type="text"
            id={this.props.task.id.toString()}
            placeholder="Student, New"
            onChange={this.handleNameChange}
          ></input>
        </td>
        {selectTdElements}
      </tr>
    );
  }
}
