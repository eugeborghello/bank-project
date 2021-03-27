import axios, { AxiosResponse } from "axios";
import { ActionCreator, Dispatch } from "redux";
import {
	CREATE_USER,
	CREATE_USER_SUCCESS,
	CREATE_USER_FAILURE,
	RegisterActionTypes,
	User,
	Users,
} from "../ActionModels/registerModels";
import { AppActions } from "../ActionModels/index";
import { REACT_APP_BACKEND_API_URL } from "@env";

const requestCreateUser = (): AppActions => ({
	type: CREATE_USER,
	loading: true,
	user: {
		id: "",
		email: "",
		password: "",
	},
	error: "",
});

const successCreateUser = (user: User): AppActions => ({
	type: CREATE_USER_SUCCESS,
	loading: false,
	user,
	error: "",
});

const invalidateCreateUser = (): AppActions => ({
	type: CREATE_USER_FAILURE,
	loading: false,
	user: {
		id: "",
		email: "",
		password: "",
	},
	error: "Unable to create user",
});

//bound function:
//nos permite acceder a estas acciones y llamarlas desde otros componentes
//con redux-thunk

export const createUser = (user: User) => {
	return (dispatch: Dispatch<AppActions>) => {
		dispatch(requestCreateUser()); //dispatchamos la request y nos devuelve la llamada a la api
		return axios
			.post(`${REACT_APP_BACKEND_API_URL}/users`, user)
			.then((res: AxiosResponse) => res.data.response)
			.then((myUser) => dispatch(successCreateUser(myUser)));
	};
};
