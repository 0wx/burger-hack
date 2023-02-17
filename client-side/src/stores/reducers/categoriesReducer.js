import {
  LOADED_CATEGORIES,
  LOADING_CATEGORIES,
  RESET_ITEMS,
  SET_CATEGORIES,
} from '../actions/actionType'

const initialState = {
  categories: [],
  loading: false,
}

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ITEMS:
      return initialState
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    case LOADING_CATEGORIES:
      return {
        ...state,
        loading: true,
      }

    case LOADED_CATEGORIES:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
