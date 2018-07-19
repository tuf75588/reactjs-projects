const _baseURL = ' api.openweathermap.org/data/2.5/'
const APP_ID = '40e258beb3a60f7086ad5315f406a452'

function prepRouteParams(getQueryStringData) {
  return Object.keys(getQueryStringData)
    .map(element => {
      return `${element}=${encodeURIComponent(getQueryStringData[element])}`
    })
    .join('&')
}

function getQueryStringData(city) {
  return {
    q: city,
    type: 'accurate',
    cnt: 5,
    APPID: APP_ID,
  }
}
function buildURL(type, queryStringData) {
  return `${_baseURL}${type}/${prepRouteParams(queryStringData)}&units=imperial`
}
const data = getQueryStringData('jenkintown')
const url = buildURL('weather', data)
function getWeather(city) {
  const queryStringData = getQueryStringData(city)
  const url = buildURL('weather', queryStringData)
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
}
export default getWeather
