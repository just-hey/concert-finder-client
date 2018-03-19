// Set up your root reducer here...
import { combineReducers } from 'redux';
import {thingsReducer} from './thingReducer'
import {userReducer} from './userReducer'



 export default combineReducers({
   things: thingsReducer,
   user: userReducer
 })
