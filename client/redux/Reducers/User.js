import { AppState } from 'react-native';
import {CREATE_USER, LOGIN, LOGOUT} from '../Constants/constants'

const initialState = {
  currentUser: []
}

const user = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
  case LOGIN:
    return {...state, currentUser: [action.payload && action.payload || {}]};
  case LOGOUT:
    return [];
  default:
    return state
    }
  }

  export default user;