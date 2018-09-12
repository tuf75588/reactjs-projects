import React, { Component } from 'react';
import config from './config';
import GifGrid from './components/GifGrid';
import ButtonRow from './components/ButtonRow';

class App extends Component {
  state = {
    gifs: [],
    loading: true,
    loadingNewGifs: false
  };
  fetchData = () => {
    fetch(config.endpoint)
      .then(data => data.json())
      .then(results => {
        this.setState(() => ({
          gifs: results.data.map((element, index, array) => {
            return element.images.fixed_height.url;
          }),
          copy: results.data.map((element, index, array) => {
            return element.images.fixed_height.url;
          }),
          loading: false
        }));
      });
  };

  componentDidMount() {
   this.fetchData();
  }

  handleClearClick = () => {
    this.setState(() => ({
      gifs: [],
      loadingNewGifs: false
    }));
  };
  handleLoadClick = () => {
    this.setState(() => ({
      loadingNewGifs: true
    }));
    this.fetchData();
  };
  getRandomGif = () => {
    const data = [...this.state.gifs];
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomGifSelection = data.find(
      (element, index, array) => index === randomIndex
    );
    this.setState(() => ({
      gifs: [randomGifSelection],
    }));
  };

  render() {
    const { gifs, loading } = this.state;
    const data =
      this.state.loadingNewGifs &&
      this.state.gifs.map((gif, index) => {
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
          />
        </div>
        <section
          className="gif-container"
          style={{ border: !this.state.loadingNewGifs ? 'none' : '' }}
        >
          {data}
        </section>
      </div>
    );
  }
}

export default App;
