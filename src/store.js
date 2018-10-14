import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import modalReducer from 'generic/molecules/Modal/modalReducer'
import timeslotReducer from 'pages/Home/components/Scheduler/Timeslot/timeslotReducer'

export default function configureStore(initialState) {
  return createStore(
    combineReducers({
      timeslot: timeslotReducer,
      modal: modalReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
