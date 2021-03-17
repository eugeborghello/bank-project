import axios from "axios";
import {CREATE_USER} from '../Constants/contants'

export default function createUser() {
    const dataUser = {
        email: 'adri@adri.com',
        password: 'hola123',
        repeatPass: 'hola123'
    
    };
    return (dispatch) => {
      // console.log(BACK_URL);
  
      axios
        .post('http://192.168.0.107:3001/user', dataUser)
        .then((res) => {
          // console.log(res.data);
          dispatch({
            type: CREATE_USER,
            users: res.data || {},
            createUserSuccess: true,
          }
          )}
          )}}

