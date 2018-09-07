import React from 'react';

const GifGrid = ({ gifs}) => {
    console.log(gifs);
    return (
        <div className='gif-img'>
            <img src={gifs}/>
        </div>
    );
};

export default GifGrid;