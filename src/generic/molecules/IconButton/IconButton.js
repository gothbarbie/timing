import React from 'react'
import styled from 'styled-components'

import Icon from '../../atoms/Icon'

const Button = styled.button`
  padding: 0;
  margin: 0;
  outline: none;
  background-color: transparent;
  border: none;
`

const IconButton = ({ color, icon, size = 'lg', onClick }) => (
  <button onClick={onClick}>
    <Icon color={color} icon={icon} size={size} />
  </button>
)

export default IconButton
