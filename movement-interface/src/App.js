import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

const MovementArea = styled('main')`
  width: 500px;
  height: 500px;
  margin: 25px auto;
  background: rgb(25, 25, 25);
  border: 15px solid navy;
  border-radius: 10px;
`;

class App extends Component {
  state = {
    top: 5,
    left: 5,
    speed: 2
  };
  //up arrow = keycode 38
  //left arrow = keycode 37
  //down arrow = keycode 40
  //right arrow = keycode 39
  componentDidMount() {
    window.addEventListener('keydown', this.keyPressed);
  }
  sliderDefault = event => {
    event.preventDefault();
  };

  speed = event => {
    const val = parseInt(event.target.value);
    this.setState(() => ({
      speed: val,
    }))

  };
  keyPressed = event => {
    let topPos = this.state.top;
    let leftPos = this.state.left;
    let speed = this.state.speed;
    const key = event.keyCode;
    //left arrow functionality
    if (key === 37) {
      leftPos -= speed;
        if (leftPos <= speed) {
          this.setState({left: 5});
        }

        else if (leftPos > 5) {
          this.setState({left: leftPos});
        }
    }
    // Top Arrow
     else if (key === 38) {
       topPos -= speed;
         if (topPos <= speed) {
           this.setState({top: 5});
         }

         else if (topPos > 5) {
           this.setState({top: topPos});
         }
     }
    // Right Arrow    
     else if (key === 39) {
       leftPos += speed;
       let distanceRight = 450 - leftPos;
         if (speed >= distanceRight) {
           this.setState({left: 445});
         }

         else if (leftPos < 450) {
           this.setState({left: leftPos});
         }
     }
    // Down Arrow    
     else if (key === 40) {
       topPos += speed;
       let distanceDown = 450 - topPos;
         if (distanceDown <= speed) {
           this.setState({top: 445});
         }

         else if (topPos < 445) {
           this.setState({top: topPos});
         }
     }
  };
  render() {
    const { top, left } = this.state;
    const styles = {
      position: 'relative',
      top: this.state.top,
      left: this.state.left,
      width: '50px',
      height: '50px'
    };
    return (
      <div className="App container">
        <h1>Move React with the Arrow Keys</h1>
        <MovementArea>
          <img
            src={
              'https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png'
            }
            style={styles}
          />
        </MovementArea>
        <div style={{ textAlign: 'center' }}>
          <h2>Control Movement Speed</h2>
          <input
            type="range"
            min="1"
            max="50"
            onChange={this.speed}
            onKeyDown={this.sliderDefault}
            value={this.state.speed}
          />
        </div>
      </div>
    );
  }
}

export default App;
