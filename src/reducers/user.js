import { SET_USER_THEME, SET_USER_PROFILE } from "../types";

const initialState = {
  profile: null,
  token: null,
  theme: "light",
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER_THEME:
      return {
        ...state,
        theme: payload,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: payload.profile,
        accessToken: payload.accessToken,
      };
    default:
      return state;
  }
}
