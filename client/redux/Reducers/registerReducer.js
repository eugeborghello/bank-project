import {CREATE_USER} from '../Constants/contants'

const initialState = {
  users: []
}

const userReducers = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    
    case CREATE_USER:
      return { ...state };
      default:
        return state
    }}

  export default userReducers;
