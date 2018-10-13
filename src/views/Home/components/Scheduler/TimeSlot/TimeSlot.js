import React from 'react'
import styled from 'styled-components'

import Button from 'generic/Button/Button'

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

const TimeSlot = ({ data }) => {
  if (data) {
    return (
      <TimeSlotStyle blue>
        <Title>{data.title}</Title>
      </TimeSlotStyle>
    )
  }
  return (
    <TimeSlotStyle>
      <Button>Add</Button>
    </TimeSlotStyle>
  )
}

export default TimeSlot
