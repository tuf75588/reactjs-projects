import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
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
    return fetch(
      `${_baseURL}&search=${this.state.searchTerm}&limit=${this.state.count}`
    )
      .then(data => {
        return data.json();
      })
      .then(response => {
        const titles = response[1];
        const snippets = response[2];
        const urls = response[3];
        this.setState(() => ({
          data: {
            titles,
            snippets,
            urls
          }
        }));
      });
  };
  handleInputChange = e => {
    const val = e.target.value;
    this.setState(() => ({
      searchTerm: val
    }));
  };
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

          <button type="submit" className="randomBtn">
            Or Generate a random article
          </button>
          <div className="rangeSection">
            <input
              min="3"
              max="15"
              type="range"
              onChange={this.handleRangeChange}
            />
            <span className="counter">count: {this.state.count}</span>
          </div>
        </div>
        <ResultsSection
          snippets={this.state.data.snippets}
          titles={this.state.data.titles}
          display={this.state.tableDisplay}
          count={this.state.count}
          data={this.state.data}
        />
      </div>
    );
  }
}

function ResultsSection(props) {
  const titles = { ...props.titles };
  console.log(titles);

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
    </div>
  );
}
export default App;
