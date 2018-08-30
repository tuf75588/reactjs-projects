import React, { Component } from "react";
const _API_URL =
  " https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

const Slider = props => {
  return (
    <div className="scroll">
      <h2>Zoom the Chart Range:</h2>
      <input
        className="slider"
        style={{ width: "500px" }}
        name="slider"
        type="range"
        min="1"
        max="273"
        value={props.slider}
        onChange={props.handleRange.bind(this)}
      />
    </div>
  );
};

class App extends Component {
  state = {
    data: [],
    array: [],
    slider: 10
  };
  componentDidMount() {
    return fetch(_API_URL)
      .then(data => {
        return data.json();
      })
      .then(results => {
        const res = results.data;
        this.setState(() => ({
          array: res,
          data: res
        }));
      });
  }
  handleRangeChange = event => {
    const rangeValue = parseInt(event.target.value);
    this.setState(prevState => ({
      array: [],
      slider: rangeValue
    }));
    const current = [...this.state.data];
    const spliced = current.splice(rangeValue, current.length);
    this.setState(() => ({
      array: spliced
    }));
  };
  render() {
    const width = {
      width: "20%"
    };
    const data = this.state.array;
    let dates = [];
    const renderData = data.map((element, index) => {
      if (index % 25 === 0) {
        dates[index] = element[0].substr(0, 4);
      }
      return (
        <div>
          <div
            className="bar"
            id={index}
            style={{
              height: Math.round(parseFloat(element[1])) / 30,
              width: 1000 / (data.length - 1)
            }}
          >
            <span className="barValue">
              {"Date: " + element[0]}
              <br />
              {"GDP: $" + element[1] + " (billions)"}
            </span>
          </div>
          <div>
            <span className="dates">{dates[index]}</span>
          </div>
        </div>
      );
    });
    return (
      <div className="outerwrapper">
        <h1>Modeling US GDP Economic Data with React</h1>
        <p>
          — A remix of the{" "}
          <a
            target="blank"
            href="https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart"
          >
            Free Code Camp D3.js Bar Chart Zipline —
          </a>
        </p>
        <div className="chart">{renderData}</div>
        <Slider
          handleRange={this.handleRangeChange}
          slider={this.state.slider}
        />
      </div>
    );
  }
}

export default App;
