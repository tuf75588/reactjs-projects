import React from 'react';

const GifGrid = ({ gifs, loading }) => {
  return (
    <div className="gif-img">
      
        <img src={gifs} alt='giphy trending image' />
  
    </div>
  );
};

export default GifGrid;
