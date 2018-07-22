import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const Layout = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: center;
`
const Input = styled.input`
  padding: 6px;
  border-radius: 5px;
  box-shadow: blanchedalmond;
  border: 1px solid #dedede;
`
const Button = styled.button`
  margin: 10px;
  background-color: #5cb85c;
  border: none;
  padding: 8px 10px;
  border-radius: 6px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
`
class LocationContainer extends Component {
  state = {
    location: '',
  }
  handleChange = e => {
    const val = e.target.value
    this.setState((prevState, props) => {
      return {
        location: val,
      }
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.submitLocation(this.state.location)
    this.setState((prevState, props) => ({
      location: '',
    }))
  }
  render() {
    return (
      <Layout column={this.props.column}>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.location}
            onChange={this.handleChange}
            placeholder="Philadelphia PA"
          />
          <Button>Get Weather Forecast</Button>
        </form>
      </Layout>
    )
  }
}
LocationContainer.propTypes = {
  submitLocation: PropTypes.func.isRequired,
  column: PropTypes.bool,
}

export default LocationContainer
