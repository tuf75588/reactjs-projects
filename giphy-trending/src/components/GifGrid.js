import React from 'react';

const GifGrid = ({ gifs, loading }) => {
  return (
    <div className="gif-img">
      
        <img src={gifs} alt='this is a grid of trending gifs from the website giphy' />
  
    </div>
  );
};

export default GifGrid;
