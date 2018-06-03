import React, { Component } from "react";
import Zipcode from "./Zipcode";

class App extends Component {
  render () {
    return (
      <div className='container'>
        <div>
        </div>
        <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <h1 className='header'>Enter a City and State</h1>
          <Zipcode />
        </div>
      </div>
    )
  }
}


export default App;
