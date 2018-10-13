import React from 'react'
import styled from 'styled-components'

const Default = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray};
  color: ${({ active, theme }) => active && theme.colors.primary};
  outline: none;
  font-size: 1.6rem;
  border: 1px solid transparent;
  border-color: ${({ active, theme }) => active && theme.colors.gray};
  padding: 1rem 2rem;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.gray};
  }

  border-radius: 4px;
`

const Primary = styled(Default)``

const Button = ({ active = false, children, primary }) => {
  if (primary) return <Primary active={active}>{children}</Primary>

  return <Default active={active}>{children}</Default>
}

export default Button
