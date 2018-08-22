import React, { Component } from "react";

class SearchFields extends Component {
  state = {
    country: "",
    capital: "",
    region: "",
    subregion: ""
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value
    }));
  };
  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          onChange={this.handleChange}
          name="country"
          placeholder="Filter by Country"
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="capital"
          placeholder="Filter by Capital"
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="region"
          placeholder="Filter by Region"
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="subregion"
          placeholder="Filter by SubRegion"
        />
      </div>
    );
  }
}

export default SearchFields;
