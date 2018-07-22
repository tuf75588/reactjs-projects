import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './components/App'

injectGlobal`
  body {
    margin: 0;
    
    padding: 0;
    height: 100vh;
    min-width: 320px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;

  }

`

ReactDOM.render(<App />, document.getElementById('root'))
