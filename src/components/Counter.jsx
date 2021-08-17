import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button
          className="btn btn-danger"
          // style={{ backgroundColor: "red" }}
          onClick={this.props.substract}
        >
          -
        </button>
        <button
          className="btn btn-success"
          // style={{ backgroundColor: "green" }}
          onClick={this.props.increment}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
