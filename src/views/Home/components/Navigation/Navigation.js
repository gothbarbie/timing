import React from 'react'
import styled from 'styled-components'

import H1 from 'generic/Typography/H1'
import NavButton from 'generic/NavButton/NavButton'

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
const Navigation = () => (
  <NavigationStyle>
    <NavButton direction="left" />
    <H1Dimmed>Week 00</H1Dimmed>
    <NavButton direction="right" />
  </NavigationStyle>
)

export default Navigation
