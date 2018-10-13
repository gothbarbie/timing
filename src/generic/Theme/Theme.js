import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#6A9AE2',
    primaryLight: '#E7F0FF',
    background: '#EEEEEE',
    white: '#FCFCFC',
    black: '#444444',
    dark: '#888888',
    gray: '#BBBBBB',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
