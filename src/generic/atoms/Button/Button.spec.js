import React from 'react'
// import { ThemeProvider } from 'styled-components'
import { shallow } from 'enzyme'
// import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { theme } from '../../Theme'
import Button from './Button'

describe('generic/atoms/Button', () => {
  it('renders Default style', () => {
    const component = shallow(<Button theme={theme}>Text</Button>)

    expect(component).toMatchSnapshot()
  })

  it('renders Primary style', () => {
    const component = shallow(
      <Button theme={theme} primary>
        Text
      </Button>
    )

    expect(component).toMatchSnapshot()
  })

  it('renders Icon style', () => {
    const component = shallow(
      <Button theme={theme} icon>
        <i />
      </Button>
    )

    expect(component).toMatchSnapshot()
  })
})
