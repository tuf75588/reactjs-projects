import React, { Component } from "react";
import "../index.css";
class Create extends Component {
  render() {
    let array = new Array(this.props.count);
    for (let i = 0; i < array.length; i++) {
      array[i] = i;
    }

    let rand = function() {
      return Math.round(Math.random() * 255);
    };
    let randColor = function() {
      return {
        background: "rgb(" + rand() + "," + rand() + "," + rand() + ")"
      };
    };

    let divs = array.map(function(val, index) {
      return <div style={randColor()} className="box" id={index} />;
    }, this);
    return <div className="container">{divs}</div>;
  }
}

export default Create;
