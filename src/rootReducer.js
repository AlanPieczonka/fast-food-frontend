import { combineReducers } from 'redux'
import user from './reducers/user'
import products from './reducers/products'

const rootReducer = combineReducers({
  user,
  products
})

export default rootReducer
