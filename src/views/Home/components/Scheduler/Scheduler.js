import React from 'react'
import styled from 'styled-components'

import Button from 'generic/Button/Button'

const SchedulerStyle = styled.section`
  width: 100%;
  max-width: 1200px;
`

const DayNames = styled.section`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`

const Days = styled(DayNames)`
  justify-content: center;
`

const Day = styled.div`
  display: grid;
  grid-gap: 0.2rem;
  width: 100%;

  div:last-of-type {
    height: 3rem;
    background: transparent;
  }
`

const Times = styled.div`
  display: grid;
  grid-gap: 0.2rem;
  width: 100%;
  margin-top: 0;
  padding-right: 4rem;
`

const Time = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.8rem;
  font-weight: 700;
  justify-self: end;
  height: 5rem;
`

const TimeSlot = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  height: 5rem;
  padding: 0 3rem;
`

const Scheduler = () => (
  <SchedulerStyle>
    <DayNames>
      <div />
      <div>Monday</div>
      <div>Tuesday</div>
      <div>Wednesday</div>
      <div>Thursday</div>
      <div>Friday</div>
    </DayNames>

    <Days>
      <Times>
        <Time>07:00</Time>
        <Time>08:00</Time>
        <Time>09:00</Time>
        <Time>10:00</Time>
        <Time>11:00</Time>
        <Time>12:00</Time>
        <Time>13:00</Time>
        <Time>14:00</Time>
        <Time>15:00</Time>
        <Time>16:00</Time>
        <Time>17:00</Time>
        <Time>18:00</Time>
      </Times>
      <Day>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>

        <div />
      </Day>
      <Day>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <div />
      </Day>
      <Day>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <div />
      </Day>
      <Day>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <div />
      </Day>
      <Day>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <TimeSlot>
          <Button>Add</Button>
        </TimeSlot>
        <div />
      </Day>
    </Days>
  </SchedulerStyle>
)

export default Scheduler
