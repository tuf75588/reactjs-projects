import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import './App.css';

const StyledHeader = styled('header')`
  padding: 4em;
  background-color: #00bfb3;
  border: 1px solid white;
  width: 400px;
  height: 100px;
`;

class App extends Component {
  state = {
    data: [],
    searchTerm: ''
  };
  componentDidMount() {
    const endpoint =
      'https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json';
    return fetch(endpoint)
      .then(data => {
        return data.json();
      })
      .then(results => {
        this.setState(() => ({
          data: results.Reggae
        }));
      });
  }
  handleChange = e => {
    const val = e.target.value;
    this.setState(prevState => ({
      searchTerm: val
    }));
  };
  render() {
    const { searchTerm } = this.state;
    const val = new RegExp(searchTerm, 'gi');

    return (
      <div className="App">
        <div className="container">
          <StyledHeader>
            <h1>Real Time React Search</h1>
            <h3>
              Here is a list of Reggae artists rendered from a JSON object
            </h3>
          </StyledHeader>
        </div>
        <h3 className="label">Search:</h3>
        <input
          type="text"
          name="search"
          placeholder="search here"
          onChange={this.handleChange}
        />
        <ul>
          {!this.state.data ? (
            <p>Loading...</p>
          ) : (
            this.state.data
              .filter((item, index) => {
                const regex = new RegExp(this.state.searchTerm, 'gi');
                return item.match(regex);
              })
              .map((name, index) => {
                return <li key={index}>{name}</li>;
              })
          )}
        </ul>
      </div>
    );
  }
}

export default App;
