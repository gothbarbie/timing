import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Navigation from './Navigation/Navigation'
import Scheduler from './Scheduler/Scheduler'
import AddEvent from './Modals/AddEvent'
import EditCategories from './Modals/EditCategories'

import Modal from 'generic/molecules/Modal/Modal'
import Category from './Modals/EditCategories/Category'

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`

const Home = ({ content }) => (
  <HomeStyle>
    <Navigation />
    <Scheduler />
    {content === 'addEvent' && (
      <Modal title="Add event">
        <AddEvent />
      </Modal>
    )}
    {content === 'editCategories' && (
      <Modal title="Edit categories">
        <EditCategories />
      </Modal>
    )}
    <Category />
  </HomeStyle>
)

const mapStateToProps = ({ modal }) => {
  const content = modal.content
  return {
    content,
  }
}

export default connect(mapStateToProps)(Home)
