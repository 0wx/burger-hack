import { combineReducers } from 'redux'
import { categoriesReducer } from './categoriesReducer'
import { itemsReducer } from './ItemsReducer'

const reducers = combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
})

export default reducers
