import React from 'react';

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null,
};


export const AuthContext = React.createContext(initialState);

export const AuthProvider = props => {
    return (
        <AuthContext.Provider value={initialState}>
            {props.children}
        </AuthContext.Provider>
    )
}