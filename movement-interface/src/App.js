import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

const MovementArea = styled('main')`
      width: 500px;
    height: 500px;
    margin: 25px auto;
    background: rgb(25, 25, 25);
    border: 15px solid navy;
    border-radius: 10px;
`


class App extends Component {
  render() {
    return (
      <div className="App container">
      <h1>Move React with the Arrow Keys</h1>
      <MovementArea>
        <img src={'https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png'} className='logo' />

      </MovementArea>
      </div>
    );
  }
}

export default App;
