import React, { useEffect, useState } from 'react';

import Modal from '../components/UI/Modal/Modal';

const errorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);

        useEffect(()=> {
            const reqInterceptor = axios.interceptors.request.use (req => {
                setError(null);
                return req;
            },
            err => {
                setError(err);
                return err;
            });
            const resInterceptor = axios.interceptors.response.use(
                res => res, 
                err => {
                    setError(err);
            });
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            }
        }, [error]);
        
        const cancelHandler = () => {
            setError(null);
        };
        
        return (
            <React.Fragment>
                <Modal show={error} modalClosed={cancelHandler}>
                    {error ? error.message: null}   
                </Modal>
                <WrappedComponent {...props} />
            </React.Fragment>
        );
    };
};

export default errorHandler;