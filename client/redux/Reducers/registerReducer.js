import { RegisterActionTypes, User, CREATE_USER } from './actionModels'

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



/*export interface User {
  id: String,
  //name: String,
  //lastName: String,
  email: String,
  password: String
}

export interface UserState {
  users: User[]
}

const initialState: UserState = {
  users: []
}

const userReducers = (state: UserState = initialState, action) => {
  //const auxArray = state.users;
  switch (action.type) {
    
    case CREATE_USER:
      return { 
        ...state, 
        users: action.payload
      };
      default:
        return state
    }}
*/
