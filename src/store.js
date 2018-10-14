import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import modalReducer from 'generic/Modal/modalReducer'
import timeslotReducer from 'views/Home/components/Scheduler/Timeslot/timeslotReducer'

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
