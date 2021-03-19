import { RegisterActionTypes, Users, CREATE_USER } from '../ActionModels/registerModels'
import { Reducer, Action } from 'redux';

const initialState: Users = {
  users: []
}

/* const initialState = {
      count: 0
}

  reducer...
  const nextState = { count: state.count }
  switch(action.type){
    case INCREMENT_COUNTER:
        nextState.count = state.count + 1;
        return nextState
        ....
  }*/

const userReducers: Reducer<Users, Action> =
       (state = initialState, action: RegisterActionTypes) => {

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
