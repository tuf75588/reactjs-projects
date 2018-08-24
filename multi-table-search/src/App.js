import React, { Component } from "react";
import RenderList from "./components/RenderList";

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
  handleCountryChange = e => {
    const val = e.target.value;
    this.setState(() => ({
      country: val
    }));
  };
  handleCapitalChange = e => {
    const val = e.target.value;
    this.setState(() => ({
      capital: val
    }));
  };
  handleRegionChange = e => {
    const val = e.target.value;
    this.setState(() => ({
      region: val
    }));
  };
  handleSubregionChange = e => {
    const val = e.target.value;
    this.setState(() => {
      subregion: val;
    });
  };
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Table Search</h1>
        </div>
        <div className="search-container">
          <input
            type="text"
            name="country"
            placeholder="Filter by Country"
            onChange={this.handleCountryChange}
          />
          <input
            type="text"
            name="capital"
            placeholder="Filter by Capital"
            onChange={this.handleCapitalChange}
          />
          <input
            type="text"
            name="region"
            placeholder="Filter by Region"
            onChange={this.handleRegionChange}
          />
          <input
            type="text"
            name="subregion"
            placeholder="Filter by Subregion"
            onChange={this.handleRegionChange}
          />
        </div>
        <RenderList data={this.state.data} />
      </div>
    );
  }
}

export default App;
