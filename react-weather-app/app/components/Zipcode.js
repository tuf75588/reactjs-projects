import React, { Component } from "react";

class Zipcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ""
    };
  }
  render() {
    return (
      <div className="zipcode-container">
        <input
          type="text"
          name="zipcode"
          className="form-control"
          placeholder="Jenkintown, Pennsylvania"
        />
        <button
          type="button"
          style={{ margin: 10 }}
          className="btn btn-success"
        >
          Get Weather
        </button>
      </div>
    );
  }
}

export default Zipcode;
