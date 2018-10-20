import { configure, addDecorator } from '@storybook/react'
import { withThemes } from 'storybook-styled-components'

import { theme } from '../src/generic/Theme'

const themes = {
  theme: theme,
}

addDecorator(withThemes(themes))

const req = require.context('../src/generic', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
