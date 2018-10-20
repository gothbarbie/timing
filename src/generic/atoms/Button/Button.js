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
  font-weight: 500;
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

  &:active {
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.25);
  }

  border-radius: 4px;
`

const IconButton = styled(Default)`
  &:focus {
    border-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const Primary = styled(Default)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  box-shadow: ${({ active, theme }) =>
    active ? 'inset 0 2px 2px rgba(0, 0, 0, 0.25)' : 'none'};

  &:focus {
    border-color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const Button = ({
  active = false,
  children,
  hasIcon,
  primary,
  size,
  title,
  onClick,
}) => {
  if (primary)
    return (
      <Primary active={active} size={size} onClick={onClick} title={title}>
        {children}
      </Primary>
    )
  if (hasIcon) {
    return (
      <IconButton hasIcon={hasIcon} onClick={onClick} title={title}>
        {children}
      </IconButton>
    )
  }

  return (
    <Default active={active} onClick={onClick} size={size} title={title}>
      {children}
    </Default>
  )
}

export default Button
