var React = require("react");
var api = require("./../../utils/helpers");

function DayItem(props) {
  console.log(props)
  var icon = props.img[0].icon;

  return (
    <div className="day-container">
    <img src={'/app/images/weather-icons/' + icon + '.svg'} alt="" className="weather"/>
    <h2 className="subheader">{api.getDate(props.info.dt)}</h2>
    </div>
    
  );
}
module.exports = DayItem;
