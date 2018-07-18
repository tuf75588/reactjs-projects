var React = require('react')
var api = require('./../../utils/helpers')

function DayItem(props) {
  console.log(props)
  var icon = props.day.weather[0].icon

  return (
    <div className="day-container" onClick={props.onClick}>
      <img
        src={'/app/images/weather-icons/' + icon + '.svg'}
        alt=""
        className="weather"
      />
      <h2 className="subheader">{api.getDate(props.day.dt)}</h2>
    </div>
  )
}
module.exports = DayItem
