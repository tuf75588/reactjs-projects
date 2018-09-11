import React, { Component } from 'react';
import config from './config';
import GifGrid from './components/GifGrid';
import ButtonRow from './components/ButtonRow';

class App extends Component {
  state = {
    gifs: [],
    copy: [],
    loading: true,
    loadingNewGifs: false,
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
          loading: false,
         
        }));
      });
  }

  componentDidMount() {
    this.loadingGifs = this.fetchData()
  }
 
  handleClearClick = () => {
    this.setState(() => ({
      gifs: [],
      loadingNewGifs: false,
    }));
   
  };
  handleLoadClick = () => {
    const { copy } = this.state;
    this.setState(() => ({
      loadingNewGifs: true,
    }))
    this.fetchData()
  }
  render() {
    const { gifs, loading } = this.state;
    const data = this.state.loadingNewGifs && (
        this.state.gifs.map((gif, index) => {
          return (
            <GifGrid gifs={gif} index={index} />
          )
        })
    )
        return (
      <div className="container">
        <h1>Trending GIFS from GIPHY!</h1>
        <div className="btn-row">
          <ButtonRow  onClear={this.handleClearClick} loadGifs={this.handleLoadClick}/>
        </div>
          <section className='gif-container' style={{border: !this.state.loadingNewGifs ? 'none' : ''}}>
            {data}
            </section>
      </div>
    );
  }
}

export default App;
