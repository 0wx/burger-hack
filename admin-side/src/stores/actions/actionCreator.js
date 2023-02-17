// import { api } from '../../helpers/fetch'
import { USER_LOGIN, USER_LOGOUT } from './actionTypes'

export const loginUser = (user) => {
  return {
    type: USER_LOGIN,
    payload: user,
  }
}

export const logoutUser = () => {
  return {
    type: USER_LOGOUT,
  }
}

/**
 *
 * @param {{email: string, password: string}} payload
 * @returns
 */
export const postLoginUser = (payload) => {
  return async (dispatch) => {
    try {
      // const { data } = await api.post('/login', payload)
      console.log('payload', payload)
      localStorage.setItem('access_token', 123)
      dispatch(loginUser({ name: 'Huseen', email: 'hoesin@gmail.com' }))
    } catch (error) {
      console.log(error)
    }
  }
}
