import React from 'react';
import GifGrid from './GifGrid';
const ButtonRow = (props) => {
    return (
        <div>
            <button type='submit' onClick={props.randomGif}>Select Random Gif</button>
            <button type='submit'>Reverse Order</button>
            <button type='submit' onClick={props.onClear}>Clear All Gifs</button>
            <button type='submit' onClick={props.loadGifs}>Load (or Reload) Trending Gifs</button>
        </div>
    );
};

export default ButtonRow