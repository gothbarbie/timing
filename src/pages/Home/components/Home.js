import React from 'react'
import styled from 'styled-components'

import Navigation from './Navigation/Navigation'
import Scheduler from './Scheduler/Scheduler'
import AddEvent from './Modals/AddEvent'

import Modal from 'generic/molecules/Modal/Modal'

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`

const Home = () => (
  <HomeStyle>
    <Navigation />
    <Scheduler />
    <Modal title="Add event">
      <AddEvent />
    </Modal>
  </HomeStyle>
)

export default Home
