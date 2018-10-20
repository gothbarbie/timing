import { ADD_CATEGORY, DELETE_CATEGORY } from '../constants/categoriesConstants'

export const addCategory = category => ({
  type: ADD_CATEGORY,
  payload: category,
})

export const deleteCategory = category => ({
  type: DELETE_CATEGORY,
  payload: category,
})
