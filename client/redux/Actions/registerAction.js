import axios from "axios";
import {CREATE_USER} from '../Constants/constants';

export const createUser = (user)=>async(dispatch,getState) =>{
  try{
    const auc = await  (await axios.post('http://192.168.0.19:3001/users', user)).data.response
    dispatch(
      {
        type:'CREATE_USER',
        payload:auc
      }
    )    
  }catch(error){
    console.log(error)
  }
}
