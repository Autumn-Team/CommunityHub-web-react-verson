import { login, register } from '../../axios-instance';

import * as actionTypes from './actionTypes';

export const authLogin = (dispatch, email, password) => {
    dispatch({type: actionTypes.AUTH_START});
    const loginData = {
        email: email,
        password: password,
        returnSecureToken: true,
    }
}

