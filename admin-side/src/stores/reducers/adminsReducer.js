import { GET_ADMINS } from '../actions/actionTypes'

const initialState = {
  admins: [],
}

export default function adminsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADMINS:
      return {
        ...state,
        admins: action.payload,
      }
    default:
      return state
  }
}