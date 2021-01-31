import React, { useContext, useReducer } from 'react';
import { initialState, AuthReducer } from '../reducer/auth';


const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

export const useAuthState = () => {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
		throw new Error('useAuthState must be used within a AuthProvider');
	}

	return context;
}

export const useAuthDispatch = () => {
    const context = useContext(AuthDispatchContext);
    if (context === undefined) {
		throw new Error('useAuthDispatch must be used within a AuthProvider');
	}

	return context;
}

export const AuthProvider = props => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {props.children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}