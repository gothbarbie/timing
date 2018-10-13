import React from 'react'

import Theme from '../generic/Theme/Theme'
import Normalize from '../generic/Normalize/Normalize'
import MainHeader from '../MainHeader'
import Home from '../views/Home'

const App = () => (
  <React.Fragment>
    <Normalize />
    <Theme>
      <React.Fragment>
        <MainHeader />
        <Home />
      </React.Fragment>
    </Theme>
  </React.Fragment>
)

export default App
