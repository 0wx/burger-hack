import { combineReducers } from 'redux'
import user from './userReducer'
import categories from './categoriesReducer'
import items from './itemsReducer'
import admins from './adminsReducer'

const rootReducer = combineReducers({
  user,
  items,
  categories,
  admins
})

export default rootReducer
