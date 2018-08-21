import React, { Component } from "react";
import "./index.css";

import Create from "./components/Create";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 6,
      subtract: false
    };
  }
  componentDidMount() {
    this.autoPlay();
  }
  autoPlay = () => {
    let play = setInterval(() => {
      let count = this.state.count;
      let newCount;

      if (count === 75) {
        this.setState({
          subtract: true
        });
      } else if (count === 0) {
        this.setState({
          subtract: false
        });
      }

      if (this.state.subtract) {
        newCount = count - 1;
      } else if (!this.state.subtract) {
        newCount = count + 1;
      }

      this.setState({
        count: newCount
      });
    }, 40);
  };
  render() {
    return (
      <div className="mainContainer">
        <Create count={this.state.count} />
      </div>
    );
  }
}

export default App;
