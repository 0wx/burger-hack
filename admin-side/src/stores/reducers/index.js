import { combineReducers } from 'redux'
import user from './userReducer'
import categories from './categoriesReducer'
import items from './itemsReducer'

const rootReducer = combineReducers({
  user,
  items,
  categories,
})

export default rootReducer
