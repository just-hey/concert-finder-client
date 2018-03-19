// import actionTypes from '../actions/UserActions'

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      return [
        ...state,
        Object.assign({}, action.user)
      ];
    case 'CREATE_USER_SUCCESS':
      return [
        ...state,
        Object.assign({}, action.user)
      ];
    default:
      return state
  }
}
