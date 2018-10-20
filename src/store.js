import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import modalReducer from 'generic/molecules/Modal/modalReducer'
import timeSlotsReducer from 'pages/Home/Reducers/timeSlotsReducer'
import weekReducer from 'pages/Home/Reducers/weekReducer'
import categoryReducer from 'pages/Home/components/Modals/EditCategories/Category/categoryReducer'

export default function configureStore(initialState) {
  return createStore(
    combineReducers({
      timeSlots: timeSlotsReducer,
      modal: modalReducer,
      week: weekReducer,
      categories: categoryReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
