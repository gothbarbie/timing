const SET_TIMESLOT = 'SET_TIMESLOT'

const timeslotReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TIMESLOT:
      return action.payload

    default:
      return state
  }
}

export default timeslotReducer
