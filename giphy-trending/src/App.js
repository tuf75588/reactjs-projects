import React, { Component } from 'react';
import config from './config';
import GifGrid from './components/GifGrid';

class App extends Component {
  state = {
    gifs: null,
    loading: true
  };
  componentDidMount() {
    return fetch(config.endpoint)
      .then(data => data.json())
      .then(results => {
        console.log(results);
        this.setState(() => ({
          gifs: results.data.map((element, index,array) => {
            return element.images.fixed_height.url
          }),
          loading: false,
        }))
      });
  }
  render() {
    const { gifs, loading } = this.state;
    const gifGrid = loading ? <h2>Fetching dank memes</h2> : gifs.map((gif, indx, arr) => {
      return (
        <GifGrid gifs={gif}/>
      )
    })
    return (
      <div className="container">
        <h1>Trending GIFS from GIPHY!</h1>
        <section className="gif-container">
          {gifGrid}
        </section>
      </div>
    );
  }
}

export default App;
