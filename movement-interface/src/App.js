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
  state = {
    top: 5,
    left: 5,
    speed: 3,
  }
  //up arrow = keycode 38
  //left arrow = keycode 37
  //down arrow = keycode 40
  //right arrow = keycode 39
  componentDidMount() {
    window.addEventListener('keydown', this.keyPressed)
  }
  keyPressed = event => {
    console.log(event.keyCode);
  }
  render() {
    const top = parseInt(this.state.top);
    const left = parseInt(this.state.left);
    const styles = {
      position: 'relative',
      top,
      left,
      width: '50px',
      height: '50px',
    }
    return (
      <div className="App container" >
      <h1>Move React with the Arrow Keys</h1>
      <MovementArea>
        <img src={'https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png'} style={styles}  />

      </MovementArea>
      </div>
    );
  }
}

export default App;
