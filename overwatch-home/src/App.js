import React, { Component } from "react";
import { tankHeroes, damageHeroes, supportHeroes } from "./utils/heroData";
import "./index.css";

function HeroGrid(props) {
  return (
    <ul className="hero-container">
      {props.tanks.map((hero, index) => {
        return (
          <li key={hero.name}>
            <div className="hero">{hero.name}</div>
          </li>
        );
      })}
  
    </ul>
  );
}
class App extends Component {
  state = {
    isSelected: false
  };
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="title">Overwatch Hero Gallery</h1>
        </div>
      <HeroGrid tanks={tankHeroes} />
      </div>
    );
  }
}

export default App;
