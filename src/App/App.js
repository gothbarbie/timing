import React from 'react'

import Theme from '../generic/Theme/Theme'
import Normalize from '../generic/Normalize/Normalize'
import MainHeader from '../MainHeader'

const App = () => (
  <React.Fragment>
    <Normalize />
    <Theme>
      <MainHeader />
    </Theme>
  </React.Fragment>
)

export default App
