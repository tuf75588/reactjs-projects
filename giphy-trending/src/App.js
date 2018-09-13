import React, { Component } from 'react';
import config from './config';
import GifGrid from './components/GifGrid';
import ButtonRow from './components/ButtonRow';

class App extends Component {
  state = {
    data: [],
    copy: [],
    loading: true,
    loadingNewGifs: false
  };
  fetchData = () => {
    fetch(config.endpoint)
      .then(data => data.json())
      .then(results => {
        this.setState(() => ({
          data: results.data.map((element, index, array) => {
            return element.images.fixed_height.url;
          }),
          loading: false,
          copy: results.data.map((element, index, array) => {
            return element.images.fixed_height.url;
          })
        }));
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  handleClearClick = () => {
    this.setState(() => ({
      data: [],
      loadingNewGifs: false
    }));
  };
  handleLoadClick = () => {
    this.setState(() => ({
      loadingNewGifs: true
    }));
    this.fetchData();
  };
  getRandomGif = event => {
    const stateCopy = [...this.state.copy];
    const copyLength = stateCopy.length;
    const random = [stateCopy[Math.floor(Math.random() * copyLength)]];
    this.setState(() => ({
      data: random,
    }));
  };

  randomizeOrder = () => {
    const stateCopy = [...this.state.data];
    this.setState(() => ({
      data: stateCopy.sort(() => {
        return 0.5 - Math.random()
      })
    }))
  }

  render() {
    const { data, loading } = this.state;
    const info =
      this.state.loadingNewGifs &&
      this.state.data.map((gif, index) => {
        return <GifGrid gifs={gif} index={index} />;
      });
    return (
      <div className="container">
        <h1>Trending GIFS from GIPHY!</h1>
        <div className="btn-row">
          <ButtonRow
            onClear={this.handleClearClick}
            loadGifs={this.handleLoadClick}
            randomGif={this.getRandomGif}
            randomize={this.randomizeOrder}
          />
        </div>
        <section
          className="gif-container"
          style={{ border: !this.state.loadingNewGifs ? 'none' : '' }}
        >
          {info}
        </section>
      </div>
    );
  }
}

export default App;
