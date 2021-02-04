import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { logout, useAuthDispatch } from '../../useContext/index';

const Logout = props => {
    const dispatch = useAuthDispatch();
    useEffect(() => {
        logout(dispatch);
    }, [dispatch]);

    return <Redirect to="/" />;
}

export default Logout;
