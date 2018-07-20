import React from 'react'
import { getDate } from '../utils/helpers'
const Dayitem = props => {
  const { icon } = props.info.weather[0]
  const { dt } = props.info

  return (
    <div className="dayContainer">
      <img
        src={`/images/weather-icons/${icon}.svg`}
        alt=""
        className="weather"
      />
      <h2 className="subheader">{getDate(dt)}</h2>
    </div>
  )
}

export default Dayitem
