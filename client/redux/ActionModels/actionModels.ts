export const CREATE_USER = 'CREATE_USER';

//Register
export interface User {
    id: string,
    email: string,
    password: string
} 

interface CreateUser {
    type: typeof CREATE_USER,
    //payload: string
}

export type RegisterActionTypes = CreateUser