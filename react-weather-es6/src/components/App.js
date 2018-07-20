import React, { Component } from 'react'
import '../App.css'
import ZipCode from './Zipcode'
import Forecast from './Forecast'
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route
            render={props => (
              <div className="navbar">
                <h1 className="header">React Weather Application</h1>
                <ZipCode
                  direction="row"
                  handleSubmitZip={city =>
                    props.history.push({
                      pathname: 'forecast',
                      search: `?city=${city}`,
                    })
                  }
                />
              </div>
            )}
          />
          <Route
            exact
            path="/"
            render={props => (
              <div className="home-container">
                <h1 className="header">Please Enter A city</h1>
                <ZipCode
                  direction="column"
                  handleSubmitZip={this.handleSubmitZip}
                />
              </div>
            )}
          />
          <Route path="/forecast" component={Forecast} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
