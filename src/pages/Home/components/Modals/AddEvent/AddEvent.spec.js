import React from 'react'
import { shallow } from 'enzyme'

import AddEvent from './AddEvent'

describe('pages/Home/components/Modals/AddEvent', () => {
  it('renders', () => {
    const component = shallow(<AddEvent />)

    expect(component).toMatchSnapshot()
  })
})
