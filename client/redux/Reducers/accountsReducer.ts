
interface Account {
  currency: string,
  balance: number,
  owner: string
}

interface Accounts {
  accounts: Array<object>
}

const initialState: Accounts = {
  accounts: []
}

export const accountsReducers = (state = initialState, action): Accounts => {
  switch(action.type){
    default: 
      return state
  }
}

export default accountsReducers;

/* { AppState } from 'react-native';
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
*/