/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {number} id
 *
 */

import { USER_ERROR, USER_LOGIN, USER_LOGOUT } from '../actions/actionTypes'

/**
 * @type {{ user: User | null, loading: boolean }}
 */
const initialState = {
  user: null,
  error: '',
  loading: false,
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
      }
    case USER_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducer
