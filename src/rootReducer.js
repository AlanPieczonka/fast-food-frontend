import { combineReducers } from 'redux'
import user from './reducers/user'
import products from './reducers/products'
import order from './reducers/order'
import organization from './reducers/organization'

const rootReducer = combineReducers({
  user,
  products,
  order,
  organization
})

export default rootReducer
