import React, { Component } from 'react'
import { getWeather, getForecast } from '../utils/api'
import { parse } from 'query-string'
import Dayitem from './Dayitem'
class Forecast extends Component {
  state = {
    forecastData: [],
    loading: true,
  }
  componentDidMount() {
    const city = parse(this.props.location.search).city
    console.log(city)
    this.setState(() => ({
      loading: true,
    }))
    getForecast(city).then(weather => {
      this.setState(() => ({
        forecastData: weather,
        loading: false,
      }))
    })
  }
  render() {
    return this.state.loading === true ? (
      <h1>Retrieving Weather Info</h1>
    ) : (
      <div>
        <h1 className="forecast-header">{this.state.forecastData.city.name}</h1>
        <div className="forecast-container">
          {this.state.forecastData.list.map(listItem => (
            <Dayitem
              key={listItem.dt}
              info={listItem}
              cityName={this.state.forecastData.city.name}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Forecast
