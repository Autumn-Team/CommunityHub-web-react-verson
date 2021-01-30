import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../sharedFunctions/utility';

export const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null,
};

const authStart = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null,
        loading: true,
        error: null,
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        userId: action.userId,
        loading: false,
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
    })
}

export const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START : return authStart(state, action);
        case actionTypes.AUTH_SUCCESS : return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default: throw new Error("error from auth reducer");
    };
};
