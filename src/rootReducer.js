import { combineReducers } from 'redux'
import user from './reducers/user'
import products from './reducers/products'
import order from './reducers/order'

const rootReducer = combineReducers({
  user,
  products,
  order
})

export default rootReducer
