import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import modalReducer from 'generic/molecules/Modal/modalReducer'
import timeSlotsReducer from 'pages/Home/Reducers/timeSlotsReducer'
import weekReducer from 'pages/Home/Reducers/weekReducer'

export default function configureStore(initialState) {
  return createStore(
    combineReducers({
      timeSlots: timeSlotsReducer,
      modal: modalReducer,
      week: weekReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
