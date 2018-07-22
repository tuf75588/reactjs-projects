import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import { getDate } from '../../utils/helpers'

const WeatherWrapper = styled.div`
  cursor: ${props => (props.detail ? 'default' : 'pointer')};
  display: flex;
  flex-direction: column;
  margin: 20px 0
  width: 50%;
  
  &hover {
    img {
      opacity: 1;
    }
  }
  @media(min-width: 551px) {
    width: 33%
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
