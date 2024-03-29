import React, { useState } from 'react';

import classes from './Login.module.css';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import SocialImage from '../../components/SocialImage/SocialImage';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObject, checkValidity } from '../../sharedFunctions/utility';
import { authLogin, useAuthState, useAuthDispatch } from '../../useContext/index';
import { Redirect } from 'react-router-dom';

const Login = props => {
    const [loginForm, setLoginForm] = useState({
        Username: {
            label: 'Username: ',
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Please enter your email',
            },
            value: '',
            validation: {
                required: true,
                isEmail: true,
            },
            valid: false,
            touched: false,
        },
        Password: {
            label: 'Password: ',
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Please enter your password',
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
    });
    const [formIsValid, setFormIsValid] = useState(false);

    const { token, loading, error } = useAuthState();
    const dispatch = useAuthDispatch();

    const inputChangedHandler = (event, inputIdenfifier) => {
        const updatedFormElement = updateObject(loginForm[inputIdenfifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, loginForm[inputIdenfifier].validation, null, null),
            touched: true,
        })
        const updatedLoginForm = updateObject(loginForm, {
            [inputIdenfifier] : updatedFormElement,
        })

        // Check validity of all element
        let checkFormIsValid = true;
        for(let Identifier in updatedLoginForm) {
            checkFormIsValid = updatedLoginForm[Identifier].valid && checkFormIsValid;
        }
        // update state
        setLoginForm(updatedLoginForm);
        setFormIsValid(checkFormIsValid);
    }

    const loginEventHandler = (event) => {
        event.preventDefault();
        //handle event
        authLogin(dispatch, loginForm.Username.value, loginForm.Password.value);
    }

    const registerEventHandler = () => {
        props.history.push('/register');
    }

    const forgotPasswordEventHandler = () => {
        props.history.push('/resetPassword');
    }

    let errorMessage = null;
    if (error) {
        errorMessage = (<p className={classes.errorMessage}>{error.message}</p>);
    }

    //get form info in state
    const formElementArray = [];
    for (let element in loginForm){
        formElementArray.push({
            id: element,
            config: loginForm[element]
        });
    }

    //create form components
    let form = (
        <div className={classes.Form}>
            <form onSubmit={loginEventHandler}>
                {formElementArray.map(element => (
                    <Input
                    key={element.id}
                    label={element.config.label}
                    elementType={element.config.elementType}
                    elementConfig={element.config.elementConfig}
                    value={element.config.value}
                    valid={element.config.valid}
                    touched={element.config.touched}
                    changed={(event) => inputChangedHandler(event, element.id)} />
                    ))}
            </form>
            <div className={classes.Link}><Button clicked={forgotPasswordEventHandler} btnType="Link">Forgot Password</Button></div>
            {errorMessage}
            <Button btnType="Success" disabled={!formIsValid} clicked={loginEventHandler}>LOGIN</Button>
        </div>
    );

    if (loading) {
        form = <Spinner />;
    }

    if (token) {
        //props.history.push('/homePage');
        return <Redirect to="/homePage" />;
    }

    return (
        <React.Fragment>
            <Logo />
            {form}
            <div className={classes.Or}>OR</div>
            <div className={classes.Register}>
                <Button btnType="Link" clicked={registerEventHandler}>Register here</Button> or use social media</div>
            <div className={classes.Social}>
                <Button btnType="Social" disabled={false}><SocialImage ImageType="facebook" /></Button>
                <Button btnType="Social" disabled={false}><SocialImage ImageType="twitter" /></Button>
                <Button btnType="Social" disabled={false}><SocialImage ImageType="google" /></Button>
            </div>
        </React.Fragment>
    );
}

export default Login;