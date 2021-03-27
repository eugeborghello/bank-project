import { LOGIN_REQ, 
         LOGIN_SUCCESS, 
         LOGIN_FAILURE, 
         userLogged, 
         userCredentials,
         LoginActionTypes } from '../ActionModels/loginModels';

interface LoginState {
  loading: boolean,
  currentUser: userLogged,
  error: string
}

const initialState: LoginState = {
  loading: false,
  currentUser: {
    id: '',
    email: '',
    password: '',
    accounts: [],
    tokens: []
 },
 error: ''
}

export const loginUserReducer =
 (state = initialState, action: LoginActionTypes): LoginState => {
      switch(action.type){
        case LOGIN_REQ:
          return { 
            loading: true,
            currentUser: {
              id: '',
              email: '',
              password: '',
              accounts: [],
              tokens: []
            },
            error: ''};
        case LOGIN_SUCCESS:
          return { ...state, loading: false, currentUser: action.user, error: ''};
        case LOGIN_FAILURE:
          return { 
            loading: false,
            currentUser: {
              id: '',
              email: '',
              password: '',
              accounts: [],
              tokens: []
            },
             error: 'Unable to login'};
        default:
          return state
      }
}

/*import { AppState } from 'react-native';
import {CREATE_USER, LOGIN, LOGOUT} from '../Constants/constants'

const initialState = {
  currentUser: []
}

const user = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN:
    return {...state, currentUser: [action.payload && action.payload || {}]};
  case LOGOUT:
    return {...state, currentUser: []};
  default:
    return state
    }
  }

  export default user;
*/

export default loginUserReducer;