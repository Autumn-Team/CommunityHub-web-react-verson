import { login, register } from '../../axios-instance';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId,
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    }
}

export const authLogin = (dispatch, email, password) => {
    dispatch(authStart());
    const loginData = {
        email: email,
        password: password,
        returnSecureToken: true,
    }

    login.post('', loginData)
        .then(response => {
            dispatch(authSuccess(response.data.idToken, response.data.localId));
        })
        .catch(error => {
            if (error.response) {
                dispatch(authFail(error.response.data.error));
            }
            else dispatch(authFail(error));
        })
};

export const authRegister = (dispatch, email, password) => {
    dispatch(authStart());
    const registerData = {
        email: email,
        password: password,
        returnSecureToken: true,
    }

    register.post('', registerData)
        .then(response => {
            dispatch(authSuccess(response.data.idToken, response.data.localId));
        })
        .catch(error => {
            if (error.response) {
                dispatch(authFail(error.response.data.error));
            }
            else dispatch(authFail(error));
        })
};

export const logout = (dispatch) => {
    dispatch ({ type: actionTypes.AUTH_LOGOUT})
}
