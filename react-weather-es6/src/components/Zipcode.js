import React, {Component} from 'react'

class Zipcode extends Component {
  render() {
    return (
      <div
        className="zipcode-container"
        style={{flexDirection: this.props.direction}}
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
