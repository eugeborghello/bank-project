import axios, {AxiosResponse} from "axios";
import { ActionCreator, Dispatch } from 'redux';
import { CREATE_USER, 
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE, 
  RegisterActionTypes, 
  User, Users } from '../ActionModels/registerModels';
import { AppActions } from '../ActionModels/index'

//'http://192.168.0.107:3001
//167.59.36.148
//192.168.1.3
//192.168.1.1

const requestCreateUser = (): AppActions => ({
  type: CREATE_USER,
  loading: true,
  user: {
      id: '',
      email: '',
      password: ''
  },
  error: ''
})

const successCreateUser = (user: User): AppActions => ({
  type: CREATE_USER_SUCCESS,
  loading: false,
  user,
  error: ''
})

const invalidateCreateUser = (): AppActions => ({
  type: CREATE_USER_FAILURE,
  loading: false,
  user: {
      id: '',
      email: '',
      password: ''
  },
  error: 'Unable to create user'
})

//bound function:
//nos permite acceder a estas acciones y llamarlas desde otros componentes
//con redux-thunk

export const createUser = (user: User) => {

  return (dispatch: Dispatch <AppActions>) => {
    dispatch(requestCreateUser()); //dispatchamos la request y nos devuelve la llamada a la api
    return axios.post('http://192.168.1.3:3001/users', user)
              .then((myUser: AxiosResponse <User>) => dispatch(successCreateUser(myUser)))
  }
}

/*export const createUser = (user) => async(dispatch,getState) => {
  try{
    const auc = await  (await axios.post('http://192.168.1.3:3001/users', user)).data.response
    dispatch(
      {
        type: CREATE_USER,
        payload: auc
      }
    )    
  }catch(error){
    console.log(error)
  }
}
*/
