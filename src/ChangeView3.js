import React from "react";

export default class Appi extends React.Component {
  constructor() {
    super();

    this.state = {
      black: true,
    };
  }

  changeColor() {
    this.setState({ black: !this.state.black });
  }

  render() {
    var btn_class = this.state.black ? "blackButton" : "whiteButton";

    return (
      <div>
        <button className={btn_class} onClick={this.changeColor.bind(this)}>
          Button
        </button>
      </div>
    );
  }
}
