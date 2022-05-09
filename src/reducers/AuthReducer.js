import { SAVE_TOKEN, SAVE_USER_INFO, AUTH_ERROR, LOG_OUT } from '../types/index'

export const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case SAVE_TOKEN:
      return { ...state, token: payload, isLoggedIn: true, error: '' }
    case SAVE_USER_INFO:
      return { ...state, userInfo: payload }
    case AUTH_ERROR:
      return {
        ...state,
        error: payload,
        token: '',
        isLoggedIn: false,
        userInfo: {}
      }
    case LOG_OUT:
      return {
        ...state,
        token: '',
        isLoggedIn: false,
        userInfo: {},
        error: ''
      }
    default:
      return state
  }
}
