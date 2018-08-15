import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { Link, BrowserRouter as Router } from 'react-router-dom';
const _baseURL =
  'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json';

const HeaderSection = styled('header')`
  padding: 4em;
  background-color: papayawhip;

  margin-top: 50px;
`;
const Title = styled('h1')`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
  font-weight: 400;
`;

const Header = props => (
  <HeaderSection>
    <Title>Wikipedia Search</Title>
  </HeaderSection>
);

class App extends Component {
  state = {
    data: [],
    searchTerm: '',
    count: 3,
    tableDisplay: 'none'
  };
  handleRangeChange = e => {
    const val = parseInt(e.target.value);
    this.setState(() => ({
      count: val
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    return fetch(`${_baseURL}&search=${this.state.searchTerm}&limit=50`)
      .then(data => {
        return data.json();
      })
      .then(response => {
        console.log(response);
        const titles = response[1];
        const snippets = response[2];
        const urls = response[3];
        let data = [];
        for (let i = 0; i < 50; i++) {
          data[i] = [response[1][i], response[2][i], response[3][i]];
        }

        this.setState(() => ({
          data,
          searchTerm: '',
          tableDisplay: 'block'
        }));
      });
  };
  handleInputChange = e => {
    const val = e.target.value;
    this.setState(() => ({
      searchTerm: val
    }));
  };
  openLink(value) {
    window.open(value);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <h3>Search Wikipeidia</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="inputBox"
              placeholder="Search Term.."
              onChange={this.handleInputChange}
              value={this.state.searchTerm}
            />
            <button type="submit" className="submitBtn">
              Search
            </button>
          </form>

          <button
            type="submit"
            className="randomBtn"
            onClick={() =>
              window.open('https://en.wikipedia.org/wiki/Special:Random')
            }
          >
            Or Generate a random article
          </button>
          <div className="rangeSection">
            <input
              min="3"
              max="50"
              type="range"
              onChange={this.handleRangeChange}
            />
            <span className="counter">count: {this.state.count}</span>
          </div>
        </div>
        <ResultsSection
          display={this.state.tableDisplay}
          count={this.state.count}
          data={this.state.data}
          openLink={this.openLink}
        />
      </div>
    );
  }
}

function ResultsSection(props) {
  console.log(props);
  const data = props.data.slice(0, props.count);
  const results = props.data
    ? data.map((item, key) => (
        <tr className="resultBox" onClick={props.openLink.bind(null, item[2])}>
          <td className="titleCol">{item[0]}</td>
          <td className="infoCol">{item[1]}</td>
        </tr>
      ))
    : '';
  const tableHeadStyle = {
    display: props.tableDisplay
  };

  return (
    <div className="resultsContainer">
      {' '}
      <table style={tableHeadStyle}>
        <tr className="resultHead">
          <th className="titleHead">Article Title</th>
          <th className="infoHead">Snippet (click to view article)</th>
        </tr>
      </table>
      <table>{results}</table>
    </div>
  );
}
export default App;
