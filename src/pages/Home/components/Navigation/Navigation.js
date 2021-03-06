import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { nextWeek, previousWeek } from '../../Actions/weekActions'

import H1 from 'generic/atoms/Typography/H1'
import NavButton from 'generic/molecules/NavButton/NavButton'

const H1Dimmed = styled(H1)`
  color: ${({ theme }) => theme.colors.gray};
`

const NavigationStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 2rem 0;
`
const Navigation = ({ nextWeek, previousWeek, week }) => (
  <NavigationStyle>
    <NavButton onClick={previousWeek} direction="left" title="Previous week" />
    <H1Dimmed>Week {week}</H1Dimmed>
    <NavButton onClick={nextWeek} direction="right" title="Next week" />
  </NavigationStyle>
)

const mapStateToProps = ({ week }) => ({
  week,
})

const mapDispatchToProps = {
  nextWeek,
  previousWeek,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
