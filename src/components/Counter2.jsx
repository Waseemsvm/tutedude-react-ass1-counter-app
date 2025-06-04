import { Component } from "react";

export default class Counter2 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="counter1">
        <h4 className="fun-head">Class Component</h4>
        <div className="count-display">
          <text>{this.state.count}</text>
        </div>
        <div className="buttons-container">
          <button
            disabled={this.state.count < 1}
            className="button"
            onClick={() => {
              this.setState({ count: this.state.count - 1 });
            }}
          >
            -
          </button>
          <button
            className="button"
            onClick={(e) => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
