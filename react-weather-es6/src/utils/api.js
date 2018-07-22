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
    return fetch(encodeURI)
      .then(res => res.json())
      .then(res => {
        return res.data
      })
  },
  fetchCurrentForecast: function(location) {
    const encodeURI = window.encodeURI(api.forecast(location))
    return fetch(encodeURI)
      .then(res => res.json())
      .then(res => {
        return res.data
      })
  },
}
export default apiMethods
