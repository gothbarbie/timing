import React from 'react'
import ReactDOM from 'react-dom'

import Root from './Root'
import App from './App/App'

import store from './store'

ReactDOM.render(
  <Root store={store}>
    <App />
  </Root>,
  document.getElementById('root')
)
