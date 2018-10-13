import React from 'react'
import styled from 'styled-components'

const Default = styled.button`
  cursor: pointer;
  width: 100%;
  width: ${({ size }) => size === 's' && 'auto'};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray};
  color: ${({ active, theme }) => active && theme.colors.primary};
  outline: none;
  font-size: 1.6rem;
  border: 1px solid transparent;
  border-color: ${({ active, theme }) => active && theme.colors.gray};
  padding: 1rem 2rem;
  padding: ${({ size }) => size === 's' && '.5rem'};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.gray};
  }

  border-radius: 4px;
`

const IconButton = styled(Default)`
  width: ${({ icon }) => icon && 'auto'};
  padding: ${({ icon }) => icon && '.5rem'};

  &:focus {
    border-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.lightGray};
  }
`

const Primary = styled(Default)``

const Button = ({ active = false, children, icon, primary, size }) => {
  if (primary)
    return (
      <Primary active={active} size={size}>
        {children}
      </Primary>
    )
  if (icon) {
    return <IconButton icon={icon}>{children}</IconButton>
  }

  return (
    <Default active={active} size={size}>
      {children}
    </Default>
  )
}

export default Button
