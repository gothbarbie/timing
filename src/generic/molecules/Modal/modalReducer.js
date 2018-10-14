import { SHOW_MODAL, HIDE_MODAL } from './modalTypes'

export default (state = { visible: false }, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { visible: true }

    case HIDE_MODAL:
      return { visible: false }

    default:
      return state
  }
}
