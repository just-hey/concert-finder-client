// import * as actionTypes from './ActionTypes'
import Axios from 'axios'

const apiUrl = 'http://localhost:3000/auth/'


export const LoginUserSuccess = (user) => {
  return {
    type: 'LOGIN_USER_SUCCESS',
    user
  }
}

export const createUserSuccess = (user) => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user
  }
}


export const loginUser = (user) => {
  return (dispatch) => {
    return Axios.post(`${apiUrl}login`, user)
      .then(response => {
        localStorage.setItem('userId', response.data.id);
        dispatch(LoginUserSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
 }

export const createUser = (user) => {
  return(dispatch) => {
    return Axios.post(`${apiUrl}register`, user)
      .then(response => {
        dispatch(createUserSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}
