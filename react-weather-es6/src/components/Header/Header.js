import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LocationContainer from '../LocationContainer/LocationContainer'
import PropTypes from 'prop-types'
const HeaderWrapper = styled.div`
  background-color: white;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (min-width: 570px) {
    flex-direction: row;
  }
`
const Title = styled(Link)`
  text-decoration: none;
  color: orangered;
`
const Header = props => (
  <HeaderWrapper>
    <Title to="/">Weather Forecast</Title>
    <LocationContainer submitLocation={props.submitLocation} />
  </HeaderWrapper>
)
Header.propTypes = {
  submitLocation: PropTypes.func.isRequired,
}
export default Header
