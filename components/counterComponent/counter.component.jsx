import React from "react";
import "./counter.component.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrement = e => {
    e.preventDefault();
    let counter = this.state.counter + 1;
    this.setState({ counter });
  };

  handleDecrement = e => {
    e.preventDefault();
    let counter = this.state.counter - 1;
    this.setState({ counter });
  };

  render() {
    return (
      <div className="display-container">
        <button onClick={this.handleDecrement}>-</button>
        <h4>{this.state.counter}</h4>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
