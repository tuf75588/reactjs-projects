import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { getDate } from '../../utils/helpers'

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 20px 0;
  cursor: ${props => (props.detail ? 'default' : 'pointer')};
  &:hover {
    img {
      opacity: 1;
    }
  }
  @media (min-width: 551px) {
    width: 33%;
  }
`
const WeatherIcon = styled.img`
  opacity: ${props => (props.detail ? '1' : '.6')};
  transition: opacity 0.2s;
  height: ${props => (props.detail ? '130px' : '60px')};
`
const Date = styled.div`
  text-align: center;
  font-weight: 100;
  font-size: ${props => (props.detail ? '30px' : '22px')};
  color: #333;
`

const WeatherSummary = props => {
  const date = getDate(props.weatherData.dt)
  const icon = props.weatherData.weather[0].icon

  const parsedQueryString = new URLSearchParams(props.location.search)
  const city = parsedQueryString.get('city')

  const handleClick = () => {
    if (props.handleClick) {
      props.handleClick(props.weatherData, city)
    }
  }

  return (
    <WeatherWrapper detail={props.detail} onClick={handleClick}>
      <WeatherIcon
        detail={props.detail}
        src={`/images/weather-icons/${icon}.svg`}
        alt={props.weatherData.weather[0].main}
      />
      <Date detail={props.detail}>{date}</Date>
    </WeatherWrapper>
  )
}

WeatherSummary.propTypes = {
  weatherData: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  detail: PropTypes.bool,
  handleClick: PropTypes.func,
}
export default withRouter(WeatherSummary)
