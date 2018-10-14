import { HIDE_MODAL, SHOW_MODAL } from './modalTypes'

export const closeModal = () => ({
  type: HIDE_MODAL,
})

export const openModal = () => ({
  type: SHOW_MODAL,
})
