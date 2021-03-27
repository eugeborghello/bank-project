import axios, {AxiosResponse} from "axios";
import { ActionCreator, Dispatch } from 'redux';
import { LOGIN_REQ, LOGIN_SUCCESS, LOGIN_FAILURE, userLogged, userCredentials } from '../ActionModels/loginModels';
import { AppActions } from '../ActionModels/index';

const requestLoginUser = (): AppActions => ({
    type: LOGIN_REQ,
    loading: true,
    user: {
        id: '',
        email: '',
        password: '',
        tokens: [],
        accounts: []
    },
    error: ''
  })
  
  const successLoginUser = (user: userLogged): AppActions => ({
    type: LOGIN_SUCCESS,
    loading: false,
    user,
    error: ''
  })
  
  const invalidateLoginUser = (): AppActions => ({
    type: LOGIN_FAILURE,
    loading: false,
    user: {
        id: '',
        email: '',
        password: '',
        tokens: [],
        accounts: []
    },
    error: 'Unable to create user'
  })

  export const loginUser = (user: userCredentials) => {
        return (dispatch: Dispatch <AppActions>) => { //type, loading, user, error
            dispatch(requestLoginUser())
            return axios.post('http://192.168.1.3:3001/login', user)
                .then((res: AxiosResponse  ) => res.data.response)
                .then((myUser) => dispatch(successLoginUser(myUser)))
        } 

  }
  

/*import axios from 'axios';

import { LOGIN, LOGOUT } from '../Constants/constants';

export const userLogin = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const userLogout = () => {
    return {
        type: LOGOUT,
        payload: []
    }
}*/