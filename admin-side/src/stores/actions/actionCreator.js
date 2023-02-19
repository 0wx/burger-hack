import { api } from '../../helpers/fetch'
import jwtDecode from 'jwt-decode'

import {
  GET_ADMINS,
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

export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: categories,
  }
}

export const getItems = (items) => {
  return {
    type: GET_ITEMS,
    payload: items,
  }
}

export const getAdmins = (admins) => {
  return {
    type: GET_ADMINS,
    payload: admins,
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
      dispatch(getCategories(data))
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
      dispatch(getItems(data))
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }
}


export const fetchAdmins = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.get('/auth/admins')
      dispatch(getAdmins(data))
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }
}


export const addAdmin = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await api.post('/auth/register', payload)
      // dispatch(fetchAdmins())
      return data
    } catch (error) {
      console.error(error)
      toast.error(error.message)
      throw error
    }
  }
}

export const addCatogery = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await api.post('/categories', payload)
      // dispatch(fetchCategories())
      return data
    } catch (error) {
      console.error(error)
      toast.error(error.message)
      throw error
    }
  }
}

export const addItem = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await api.post('/items', payload)
      // dispatch(fetchItems())
      return data
    } catch (error) {
      console.error(error)
      toast.error(error.message)
      throw error
    }
  }
}

export const editCategory = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await api.put('/categories/' + payload.id, payload)
      dispatch(fetchCategories())
      return data
    } catch (error) {
      console.error(error)
      toast.error(error.message)
      throw error
    }
  }
}
export const editItem = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await api.put('/items/' + payload.id, payload)
      dispatch(fetchItems())
      return data
    } catch (error) {
      console.error(error)
      toast.error(error.message)
      throw error
    }
  }
}
export const editAdmin = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await api.put('/auth/admins/' + payload.id, payload)
      dispatch(fetchAdmins())
      return data
    } catch (error) {
      console.error(error)
      toast.error(error.message)
      throw error
    }
  }
}

export const removeCategory = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.delete('/categories/' + id)
      dispatch(fetchCategories())
      return data
    } catch (error) {
      console.error(error)
      toast.error(error.message)
      throw error
    }
  }
}

export const removeItem = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.delete('/items/' + id)
      dispatch(fetchItems())
      return data
    } catch (error) {
      console.error(error)
      toast.error(error.message)
      throw error
    }
  }
}

export const removeAdmin = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.delete('/auth/admins/' + id)
      dispatch(fetchAdmins())
      return data
    } catch (error) {
      console.error(error)
      toast.error(error.message)
      throw error
    }
  }
}