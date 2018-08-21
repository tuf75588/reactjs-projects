import React, { Component } from "react";

import "./App.css";
import Create from "./components/Create";

class App extends Component {
  state = {
    count: 70,
    subtract: false
  };
  autoPlay = () => {
    const play = setInterval(() => {
      const count = this.state.count;
      let newCount;
      if (count === 75) {
        this.setState(() => ({
          subtract: true
        }));
      } else if (count === 0) {
        this.setState(() => ({
          subtract: false
        }));
      }
      if (this.state.subtract) {
        newCount = count - 1;
      } else if (!this.state.count) {
        newCount = count + 1;
      }
      this.setState(() => ({
        count: newCount
      }));
    }, 70);
  };
  componentDidMount() {
    this.autoPlay();
  }

  render() {
    return (
      <div className="App">
        <Create count={this.state.count} />
      </div>
    );
  }
}

export default App;
