import React from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    // console.log(this.state.count);
    return (
      <div>
        <h1>Counter</h1>
        <Counter
          count={this.state.count}
          increment={() => this.setState({ count: this.state.count + 1 })}
          substract={() =>
            this.state.count !== 0
              ? this.setState({ count: this.state.count - 1 })
              : console.log("do nothing")
          }
        />
      </div>
    );
  }
}

export default App;
