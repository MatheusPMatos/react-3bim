import { Component } from "react";

type CounterState = {
  count: number;
};

export default class Contador extends Component<CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <button onClick={this.decrement}>-1</button>
        <span style={{ margin: "0 20px", fontSize: "20px" }}>
          {this.state.count}
        </span>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}
