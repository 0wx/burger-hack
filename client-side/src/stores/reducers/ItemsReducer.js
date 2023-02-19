import {
  LOADED_ITEMS,
  LOADING_ITEMS,
  RESET_ITEMS,
  SET_ITEMS,
} from '../actions/actionType'

const initialState = {
  items: [],
  loading: false,
}
export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ITEMS:
      return initialState
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      }
    case LOADING_ITEMS:
      return {
        ...state,
        loading: true,
      }
    case LOADED_ITEMS:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
