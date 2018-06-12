import axios from 'axios'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const userLogin = (creds, history) => {
  return async dispatch => {
    try {
      let response = await axios.post(`http://localhost:3000/api/v1/login`, creds)
      let user = response.data
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: user
      })
      history.push('/NewsMain')
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      })
      history.push('/LoginFail')
    }
  }
}

export const userRegister = (name, email, password, avatar, history) => {
  console.log('in the thing', name, email, password, avatar,)
  return async dispatch => {
    try {
      let response = await axios.post(`http://localhost:3000/api/v1/register`, {name, email, password, avatar})
      let newUser = response.data
      dispatch({
        type: USER_REGISTER_SUCCESS
      })
      history.push('/')
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAILED,
        payload: err
      })
      history.push('/')
    }
  }
}

export const userLogout = (history) => {
  return dispatch => {
    dispatch({
      type: USER_LOGOUT

    })
    history.push('/')
  }
}
