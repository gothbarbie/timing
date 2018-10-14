import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { openModal } from 'generic/molecules/Modal/modalActions'

import Button from 'generic/atoms/Button'
import Icon from 'generic/atoms/Icon/Icon'

const TimeSlotStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ blue, theme }) => blue && theme.colors.primaryLight};

  height: 5rem;
  padding: 0 1rem;
`

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
`

const Timeslot = ({ data, openModal }) => {
  if (data) {
    return (
      <TimeSlotStyle blue>
        <Title>{data.title}</Title>
        <Button icon onClick={openModal}>
          <Icon icon={['fas', 'ellipsis-h']} />
        </Button>
      </TimeSlotStyle>
    )
  }
  return (
    <TimeSlotStyle>
      <Button>Add</Button>
    </TimeSlotStyle>
  )
}

const mapDispatchToProps = {
  openModal,
}

export default connect(
  null,
  mapDispatchToProps
)(Timeslot)
