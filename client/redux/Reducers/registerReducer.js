import { AppState } from 'react-native';
import {CREATE_USER} from '../Constants/constants'

const initialState = {
  users: []
}

const userReducers = (state = initialState, action) => {
  console.log(action)
  const auxArray = state.users;
  switch (action.type) {
    case CREATE_USER:
      return {...state,users:[...auxArray,action.payload]};
    default:
        return state
    }
  }

  export default userReducers;
