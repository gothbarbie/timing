import React from 'react'
import styled from 'styled-components'

import Navigation from './Navigation/Navigation'
import Scheduler from './Scheduler/Scheduler'
import Modal from 'generic/Modal/Modal'

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

const Home = () => (
  <HomeStyle>
    <Navigation />
    <Scheduler />
    <Modal title="Add event">Modal</Modal>
  </HomeStyle>
)

export default Home
