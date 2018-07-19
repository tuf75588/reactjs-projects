import React, { Component } from 'react'
import '../App.css'
import ZipCode from './Zipcode'

class App extends Component {
  handleSubmitZip = () => {}
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <h1 className="header">React Weather Application</h1>
          <ZipCode direction="row" handleSubmitZip={this.handleSubmitZip} />
        </div>
        <div className="home-container">
          <h1 className="header">Enter A City and State</h1>
          <ZipCode direction="column" />
        </div>
      </div>
    )
  }
}

export default App
