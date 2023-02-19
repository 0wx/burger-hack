import { api } from '../../helpers/fetch'
import jwtDecode from 'jwt-decode'

import {
  GET_CATEGORIES,
  GET_ITEMS,
  USER_ERROR,
  USER_LOADED,
  USER_LOADING,
  USER_LOGIN,
  USER_LOGOUT,
} from './actionTypes'
import { toast } from 'react-toastify'

export const loginUser = (user) => {
  return {
    type: USER_LOGIN,
    payload: user,
  }
}

export const logoutUser = () => {
  localStorage.removeItem('access_token')
  return {
    type: USER_LOGOUT,
  }
}

export const userError = (message) => {
  return {
    type: USER_ERROR,
    payload: message,
  }
}

export const userClearError = () => {
  return {
    type: USER_ERROR,
    payload: '',
  }
}

export const userLoading = () => {
  return {
    type: USER_LOADING,
    payload: true,
  }
}

export const userLoaded = () => {
  return {
    type: USER_LOADED,
    payload: false,
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
      const { data } = await api.post('/auth/login', payload)
      localStorage.setItem('access_token', data.access_token)
      dispatch(loginUser(jwtDecode(data.access_token)))
      return data
    } catch (error) {
      // console.log(error)
      // dispatch(userError(error.message))
      toast.error(error.message)
    }
  }
}


export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.get('/categories')
      dispatch({
        type: GET_CATEGORIES,
        payload: data,
      })
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }
}


export const userParse = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('access_token')
      if (token) {
        dispatch(loginUser(jwtDecode(token)))
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }
}


export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.get('/items')
      dispatch({
        type: GET_ITEMS,
        payload: data,
      })
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }
}
