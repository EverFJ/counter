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
    return (
      <div>
        <h1>Counters</h1>
        <Counter
          count={this.state.count}
          // if counter = SecondCounter increment both
          increment={() => {
            if (this.state.count !== max) {
              if (this.state.count === this.state.secondCount) {
                this.setState({
                  count: this.state.count + 1,
                  secondCount: this.state.secondCount + 1,
                });
              }
              this.setState({ count: this.state.count + 1 });
            }
          }}
          substract={() => {
            if (this.state.count !== min) {
              this.setState({ count: this.state.count - 1 });
            }
          }}
        />
        <SecondCounter
          count={this.state.secondCount}
          increment={() => {
            if (this.state.secondCount !== max) {
              this.setState({ secondCount: this.state.secondCount + 1 });
            }
          }}
          substract={() => {
            if (this.state.secondCount !== min) {
              if (this.state.count === this.state.secondCount) {
                this.setState({
                  count: this.state.count - 1,
                  secondCount: this.state.secondCount - 1,
                });
              }
              this.setState({ secondCount: this.state.secondCount - 1 });
            }
          }}
        />
      </div>
    );
  }
}

export default App;
