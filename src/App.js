import React from "react";
import Counter from "./components/Counter";
import SecondCounter from "./components/SecondCounter";
import "./App.css";

const max = 100;
const min = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      secondCount: 0,
    };
  }
  render() {
    // console.log(this.state.count);
    return (
      <div>
        <h1>Counters</h1>
        {/* Both counters stay between min and max */}
        <Counter
          count={this.state.count}
          // if counter = SecondCounter increment both
          increment={() => this.setState({ count: this.state.count + 1 })}
          substract={() =>
            this.state.count !== 0
              ? this.setState({ count: this.state.count - 1 })
              : console.log("do nothing")
          }
        />
        <SecondCounter
          count={this.state.secondCount}
          increment={() =>
            this.setState({ secondCount: this.state.secondCount + 1 })
          }
          // if counter = SecondCounter decrement both
          substract={() =>
            this.state.secondCount !== 0
              ? this.setState({ secondCount: this.state.secondCount - 1 })
              : console.log("do nothing")
          }
        />
      </div>
    );
  }
}

export default App;
