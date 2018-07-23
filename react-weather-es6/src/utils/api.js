import axios from 'axios'

const _baseURL = 'http://api.openweathermap.org/data/2.5/'
const _API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe'

const api = {
  currentWeather: location =>
    `${_baseURL}weather?q=${location}&type=accurate&APPID=${_API_KEY}`,
  forecast: location =>
    `${_baseURL}forecast/daily?q=${location}&type=accurate&APPID=${_API_KEY}`,
}
const apiMethods = {
  fetchCurrentWeather: function(location) {
    const encodeURI = window.encodeURI(api.currentWeather(location))
    return axios.get(encodeURI).then(currentWeatherData => {
      return currentWeatherData.data
    })
  },
  fetchForecast: function(location) {
    const encodeURI = window.encodeURI(api.forecast(location))
    return axios.get(encodeURI).then(forecast => {
      return forecast.data
    })
  },
}
export default apiMethods
