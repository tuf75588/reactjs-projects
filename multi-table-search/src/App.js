import React, { Component } from "react";
import Header from "./components/Header";
import SearchFields from "./components/SearchFields";
import { getData } from "./utils/Api";

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    getData().then(data => {
      this.setState(() => ({
        data
      }));
    });
  }
  handleInputSearch = searchTerm => {
    const original = [...this.state.data];
    const { data } = this.state;
    if (searchTerm.length > 0) {
      const check = data.filter((element, index, array) => {
        const regex = new RegExp(searchTerm, "gi");
        const check = element.name.official.match(regex);
        return check;
      });
      this.setState(() => ({
        data: check
      }));
    }
  };
  render() {
    const tableFileds = this.state.data.map((element, index) => {
      const capital = element.capital[0];
      const officialName = element.name.official;
      const region = element.region;
      const subregion = element.subregion;
      const lat = element.latlng[0];
      const lng = element.latlng[1];
      return (
        <tr className="data" key={index}>
          <td>{officialName}</td>
          <td>{capital}</td>
          <td>{region}</td>
          <td>{subregion}</td>
          <td>{lat}</td>
          <td>{lng}</td>
        </tr>
      );
    });
    return (
      <div className="container">
        <Header title="Country/Capital Data Multi-Search Service" />
        <SearchFields handleInputSearch={this.handleInputSearch} />
        <div className="tableContainer">
          <table className="tableData">
            <thead>
              <tr>
                <th>Country</th>
                <th>Capital</th>
                <th>Region</th>
                <th>Subregion</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
            </thead>
            {tableFileds}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
