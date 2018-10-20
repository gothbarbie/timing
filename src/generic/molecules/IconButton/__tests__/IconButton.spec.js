import React from 'react'
import { shallow } from 'enzyme'

import IconButton from '../IconButton'

describe('generic/molecules', () => {
  it('renders', () => {
    const component = shallow(<IconButton />)

    expect(component).toMatchSnapshot()
  })
})
