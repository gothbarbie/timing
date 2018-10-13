import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons'

import Root from './Root'
import App from './App/App'

import store from './store'

library.add(faArrowCircleLeft, faArrowCircleRight)

ReactDOM.render(
  <Root store={store}>
    <App />
  </Root>,
  document.getElementById('root')
)
