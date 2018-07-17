const _API_KEY = 'bf6aac77272a79dcc8f8d8f5071f86a2';
const _baseURL = 'http://api.openweathermap.org/data/2.5/';

function prepRouteParams(queryStringData) {
    return Object.keys(queryStringData).map(function(key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&');
}


function prepURL(type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData) + '&units=imperial';
}

function getQueryStringData(city) {
    return {
      q: city,
      type: 'accurate',
      APPID: _API_KEY,
      cnt: 5,
    }
}

function getCurrentWeather(city) {
  const queryStringData = getQueryStringData(city);
  const url = prepURL('weather', queryStringData)
  return fetch(url).then(response => {
    return response.json();
  }).then(res => {
    console.log(res);
  })
}
function getForecast(city) {
  const queryStringData = getQueryStringData(city);
  const url = prepURL('forecast/daily', queryStringData)
  return fetch(url).then(response => {
    return response.json();
  }).then(res => {
    return res;
  })
}
module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
}


