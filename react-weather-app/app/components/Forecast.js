var React = require("react");
var ReactRouter = require("react-router-dom");
var queryString = require("query-string");
var api = require("../../utils/api");
var DayItem = require("./DayItem");
class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: [],
      loading: true,
    };
    this.makeRequest = this.makeRequest.bind(this)
  }
  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city
    this.makeRequest(this.city);
  }
  makeRequest(city) {
      this.setState(function() {
        return {
          loading: true,
        }
      })
      api.getForecast(city).then(function(res) {
        this.setState(function() {
          return {
            loading: false,
            forecastData: res,
          }
        })
      }.bind(this))
  }
  render() {
    return this.state.loading === true 
    ? <h1 className="forecast-header">Loading Weather Data!</h1>
    : <div>
          <h1 className='forecast-header'>{this.city}</h1>
      <div className="forecast-container">
          {this.state.forecastData.list.map(function(listItem, key) {
            return <DayItem info={listItem} img={listItem.weather}/>
          }, this)}
      </div>
    </div>
}
}

module.exports = Forecast;
