import React, { Component } from "react";

class App extends Component {
  state = {
    data: [],
    country: "",
    capital: "",
    region: "",
    subregion: ""
  };
  componentDidMount() {
    this.getLocations();
  }
  getLocations = () => {
    const API_URL =
      "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";
    return fetch(API_URL)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        let data = {};
        this.setState(() => ({
          data: result.map((element, index, array) => {
            data.name = element.name.official;
            data.capital = element.capital[0];
            data.region = element.region;
            data.subregion = element.subregion;
            return data;
          })
        }));
      });
  };
  render() {
    return <div>hi</div>;
  }
}

export default App;
