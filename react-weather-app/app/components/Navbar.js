import React, { Component } from 'react';
import Zipcode from './Zipcode'
class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
            <h1>Weather App</h1>
            <Zipcode />
            </div>
        );
    }
}

export default Navbar;