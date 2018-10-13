import { createStore, combineReducers } from 'redux'

const SET_DAY = 'SET_DAY'

const dayReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_DAY:
      return action.payload

    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    day: dayReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
