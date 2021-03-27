import { CREATE_USER, 
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE, 
  RegisterActionTypes, 
  User, Users } from '../ActionModels/registerModels';
import { Reducer, Action } from 'redux';
import { State } from 'react-native-gesture-handler';

interface UsersState {
  loading: boolean,
  users: User[],
  error: string
}


const initialState: UsersState = {
 loading: false,
 users: [],
 error: ''
}

export const usersReducer =
 (state = initialState, action: RegisterActionTypes): UsersState => {
      switch(action.type){
        case CREATE_USER:
          return { loading: true, users: [], error: ''};
        case CREATE_USER_SUCCESS:
          return { ...state, loading: false, users: [...state.users, action.user], error: ''};
        case CREATE_USER_FAILURE:
          return { loading: false, users: [], error: 'Unable to create user'};
        default:
          return state
      }
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

  

export default usersReducer;