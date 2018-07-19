import React, { Component } from 'react'
import { getWeather } from '../utils/api'
class Zipcode extends Component {
  state = {
    zipcode: '',
  }
  render() {
    return (
      <div
        className="zipcode-container"
        style={{ flexDirection: this.props.direction }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Philadelphia, Pennsylvania"
        />
        <button className="btn btn-success">Get Weather!</button>
      </div>
    )
  }
}

export default Zipcode
