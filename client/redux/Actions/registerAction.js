import axios from "axios";
import {CREATE_USER} from '../Constants/constants';
import { REACT_APP_BACKEND_API_URL } from "@env";

export const createUser = (user)=>async(dispatch,getState) =>{
  try{
    const auc = await axios.post(`${REACT_APP_BACKEND_API_URL}/users`, user)
    dispatch(
      {
        type:CREATE_USER,
        payload:auc.data.response
      }
    )    
  }catch{
    console.log("error")
  }
}
