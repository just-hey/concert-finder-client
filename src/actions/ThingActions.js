// import * as actionTypes from './ActionTypes'
import Axios from 'axios'

const apiUrl = 'http://localhost:3000/'


export const FetchThingSuccess = (things) => {
  return {
    type: 'FETCH_THING_SUCCESS',
    things
  }
}

export const fetchThings = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        // dispatch(FetchThingsSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
 }
