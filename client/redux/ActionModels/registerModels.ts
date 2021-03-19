export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

//Register
export interface User {
    id?: string,
    email: string,
    password: string
} 

export interface Users {
    users: User[]
}

/*interface CreateUser {
    type: typeof CREATE_USER,
    payload: object
}*/

interface CreateUserAsync {
    loading: boolean;
    user: User;
    error: string;
  }
  
  interface CreateUserReq extends CreateUserAsync {
    type: typeof CREATE_USER
  }
  
  interface CreateUserSuccess extends CreateUserAsync {
    type: typeof CREATE_USER_SUCCESS
  }
  
  interface CreateUserFailure extends CreateUserAsync {
    type: typeof CREATE_USER_FAILURE
  }
  
export type RegisterActionTypes = CreateUserReq | CreateUserSuccess | CreateUserFailure