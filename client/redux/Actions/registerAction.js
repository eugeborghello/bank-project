import axios from "axios";
import { ActionCreator } from 'redux';
import { CREATE_USER, RegisterActionTypes, User } from '../ActionModels/actionModels'

//'http://192.168.0.107:3001
//167.59.36.148
//192.168.1.3
//192.168.1.1

export const createUser = (user) => async(dispatch,getState) => {
  try{
    const auc = await  (await axios.post('http://192.168.1.3:3001/users', user)).data.response
    dispatch(
      {
        type: CREATE_USER,
        payload:auc
      }
    )    
  }catch(error){
    console.log(error)
  }
}

/*export const createUser: ActionCreator<CREATE_USER> = 
(user, users: User[]) => async(dispatch,getState) =>{
  try{
    users = await  (await axios.post('http://192.168.0.107:3001/users', user)).data.response
    dispatch(
      {
        type: CREATE_USER,
        payload: users
      }
    )    
  }catch(error){
    console.log(error)
  }
}*/