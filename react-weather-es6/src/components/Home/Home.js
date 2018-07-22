import React from 'react'
import LocationContainer from '../LocationContainer/LocationContainer'
import styled from 'styled-components'
const H1 = styled.h1`
  font-weight: 180;
`

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 380px;
`
const Home = props => (
  <HomeWrapper>
    <H1>Please Enter A City</H1>
    <LocationContainer submitLocation={props.submitLocation} />
  </HomeWrapper>
)
export default Home
