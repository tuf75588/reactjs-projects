const _baseURL = 'http://api.openweathermap.org/data/2.5/'
const APP_ID = '53db7473f1e7afdfedf1933722fa5390'

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
    APPID: APP_ID,
    cnt: 5,
  }
}
function buildURL(type, queryStringData) {
  return `${_baseURL}${type}/?${prepRouteParams(
    queryStringData,
  )}&units=imperial`
}

export function getWeather(city) {
  const queryStringData = getQueryStringData(city)
  const url = buildURL('weather', queryStringData)
  return url
}
export function getForecast(city) {
  const queryStringData = getQueryStringData(city)
  const url = buildURL('forecast', queryStringData)
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      return data
    })
}
