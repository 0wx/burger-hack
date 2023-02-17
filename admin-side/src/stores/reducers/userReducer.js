/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {number} id
 *
 */

/**
 * @type {{ user: User | null, loading: boolean }}
 */
const initialState = {
  user: null,
  loading: false,
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'user/login':
      return {
        ...state,
        user: action.payload,
      }
    case 'user/logout':
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

export default userReducer
