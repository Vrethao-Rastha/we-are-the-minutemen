import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGOUT
} from '../auth'

let initialState = {
  user: {},
  err: {},
  isAuthed: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      localStorage.setItem('token', JSON.stringify(action.payload.token))
      return {
        ...state,
        user: action.payload,
        isAuthed: true
      }
    case USER_LOGIN_FAILED:
      return {
        ...state,
        err: action.payload
      }
    case USER_REGISTER_SUCCESS:
      return state
    case USER_REGISTER_FAILED:
      return {
        ...state,
        err: action.payload
      }
    case USER_LOGOUT:
      return {
        ...initialState
      }
    default:
      return state
  }
}
