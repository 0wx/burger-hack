import rootReducer from './reducers'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from './middlewares/logger'

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store
