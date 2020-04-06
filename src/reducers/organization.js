import { UPDATE_ORGANIZATION, FETCH_ORGANIZATION } from "../types";

const initialState = {
  name: 'Kentucky Fried Chicken',
  theme: 'light',
  logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/300px-KFC_logo.svg.png'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORGANIZATION: 
        return {
          ...state,
          ...action.payload
        }
    case UPDATE_ORGANIZATION: 
        return {
          ...state,
          ...action.payload.changes
        }
    default:
      return state;
  }
}
