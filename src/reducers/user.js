import { USER_LOGGED_IN } from '../types'

// temporary, made up example
export default function (state = {}, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state };
    default:
      return state;
  }
}
