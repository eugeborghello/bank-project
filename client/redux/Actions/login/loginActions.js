import axios from 'axios';

import { LOGIN, LOGOUT } from '../../Constants/constants';

export const userLogin = (user) => {
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