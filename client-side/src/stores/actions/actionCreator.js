import { api } from '../../helpers/fetch'
import {
  LOADED_CATEGORIES,
  LOADED_ITEMS,
  LOADING_CATEGORIES,
  LOADING_ITEMS,
  RESET_CATEGORIES,
  RESET_ITEMS,
  SET_CATEGORIES,
  SET_ITEMS,
} from './actionType'

/**
 *
 * @param {Array} payload
 * @returns
 */
export const setItems = (payload) => {
  return { type: SET_ITEMS, payload }
}

export const setLoadingItems = () => {
  return { type: LOADING_ITEMS }
}

export const setLoadedItems = () => {
  return { type: LOADED_ITEMS }
}

export const resetItems = () => {
  return { type: RESET_ITEMS }
}
/**
 *
 * @param {Array} payload
 * @returns
 */
export const setCategories = (payload) => {
  return { type: SET_CATEGORIES, payload }
}

export const setLoadingCategories = () => {
  return { type: LOADING_CATEGORIES }
}

export const setLoadedCategories = () => {
  return { type: LOADED_CATEGORIES }
}

export const resetCategories = () => {
  return { type: RESET_CATEGORIES }
}

export const fetchItems = () => async (dispatch) => {
  try {
    dispatch(setLoadingItems())
    const { data } = await api.get('/items?_expand=category&_embed=ingredients')
    dispatch(setItems(data))
    return data
  } catch (error) {
    throw error
  } finally {
    dispatch(setLoadedItems())
  }
}
export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(setLoadingCategories())
    const { data } = await api.get('/categories?_embed=items')
    dispatch(setCategories(data))
    return data
  } catch (error) {
    throw error
  } finally {
    dispatch(setLoadedCategories())
  }
}
