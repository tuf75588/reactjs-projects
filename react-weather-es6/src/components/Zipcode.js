import React, { Component } from 'react'
import { getWeather } from '../utils/api'
class Zipcode extends Component {
  state = {
    zipcode: '',
  }
  handleSubmit = () => {
    this.props.handleSubmitZip(this.state.zipcode)
  }
  handleZipChange = event => {
    const val = event.target.value
    this.setState(() => ({
      zipcode: val,
    }))
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
          onChange={this.handleZipChange}
        />
        <button className="btn btn-success" onClick={this.handleSubmit}>
          Get Weather!
        </button>
      </div>
    )
  }
}

export default Zipcode
