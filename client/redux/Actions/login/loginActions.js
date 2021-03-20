import axios from 'axios';

import { LOGIN, LOGOUT } from '../../Constants/constants';

export const userLogin = (user) => {
    console.log(user)
    return {
        type: LOGIN,
        payload: user
    }
}

export const userLogout = () => {
    return {
        type: LOGOUT,
        payload: []
    }
}