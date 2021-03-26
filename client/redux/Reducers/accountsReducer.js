import { AppState } from 'react-native';
import {GET_ACCOUNTS} from '../Constants/constants'
 
const initialState = {
  accounts: []
}

const accountsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNTS:
      return {...state,accounts:[action.payload]};
    default:
        return state
    }
  }

  export default accountsReducers;
