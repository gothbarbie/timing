import React from 'react'
import styled from 'styled-components'

import Theme from 'generic/Theme/Theme'
import Normalize from 'generic/Normalize/Normalize'
import MainHeader from 'layout/MainHeader'
import Home from 'pages/Home'

const AppWrap = styled.div`
  height: 100vh;
`

const App = () => (
  <>
    <Normalize />
    <Theme>
      <AppWrap>
        <MainHeader />
        <Home />
      </AppWrap>
    </Theme>
  </>
)

export default App
