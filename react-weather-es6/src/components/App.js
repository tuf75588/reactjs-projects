import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
const Background = styled.div`
  /* background: url('/images/pattern.svg'); */
  height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 10px;
`
class App extends Component {
  render() {
    return (
      <Router>
        <Background>
          <Route
            render={props => (
              <Header
                submitLocation={city =>
                  props.history.push({
                    pathname: '/forecast',
                    search: `?city=${city}`,
                  })
                }
              />
            )}
          />
          <Route
            exact
            path="/"
            render={props => (
              <Home
                submitLocation={city =>
                  props.history.push({
                    pathname: '/forecast',
                    search: `?city=${city}`,
                  })
                }
              />
            )}
          />
        </Background>
      </Router>
    )
  }
}

export default App
