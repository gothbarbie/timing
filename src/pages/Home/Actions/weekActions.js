import { INCREMENT_WEEK, DECREMENT_WEEK } from '../constants/weekConstants'

export const nextWeek = () => ({
  type: INCREMENT_WEEK,
})

export const previousWeek = () => ({
  type: DECREMENT_WEEK,
})
