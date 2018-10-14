import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faEllipsisH,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'

import Root from './Root'
import App from './App/App'

import configureStore from './store'

const store = configureStore()

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

library.add(faArrowCircleLeft, faArrowCircleRight, faEllipsisH, faTimesCircle)

ReactDOM.render(
  <Root store={store}>
    <App />
  </Root>,
  document.getElementById('root')
)
