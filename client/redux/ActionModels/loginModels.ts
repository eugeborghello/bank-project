export const LOGIN_REQ = 'LOGIN_REQ';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';
import { User } from './registerModels'

export interface userLogged extends User {
   accounts: Array<string>,
   tokens: Array<string>
}
export interface userCredentials {
    email: string,
    password: string
}

interface LoginUserAsync {
    loading: boolean;
    user: userLogged;
    error: string;
  }
  
  interface LoginUserReq extends LoginUserAsync {
    type: typeof LOGIN_REQ
  }
  
  interface LoginUserSuccess extends LoginUserAsync {
    type: typeof LOGIN_SUCCESS
  }
  
  interface LoginUserFailure extends LoginUserAsync {
    type: typeof LOGIN_FAILURE
  }
  
export type LoginActionTypes = LoginUserReq | LoginUserSuccess | LoginUserFailure;