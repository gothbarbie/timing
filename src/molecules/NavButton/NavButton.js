import React from 'react'
import styled from 'styled-components'

import Icon from 'generic/Icon/Icon'

const NavButtonStyle = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  padding: 0;
`

const NavButton = ({ direction = 'left' }) => (
  <NavButtonStyle>
    {direction === 'left' && <Icon icon={['fas', 'arrow-circle-left']} />}
    {direction === 'right' && <Icon icon={['fas', 'arrow-circle-right']} />}
  </NavButtonStyle>
)

export default NavButton
