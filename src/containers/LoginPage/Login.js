import React, { useState } from 'react';

import classes from './Login.module.css';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import SocialImage from '../../components/SocialImage/SocialImage';
import { updateObject, checkValidity } from '../../sharedFunctions/utility';

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

    
    const inputChangedHandler = (event, inputIdenfifier) => {
        const updatedFormElement = updateObject(loginForm[inputIdenfifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, loginForm[inputIdenfifier].validation),
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
        props.history.push('/homePage');
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
            <div className={classes.Link}><Button btnType="Link">Forgot Password</Button></div>
            <Button btnType="Success" disabled={!formIsValid}>LOGIN</Button>
        </form>
    );

    return (
        <React.Fragment>
            <Logo />
            <div className={classes.Form}>
                {form}
            </div>
            <div className={classes.Or}>OR</div>
            <div className={classes.Register}><Button btnType="Link">Register here</Button> or use social media</div>
            <div className={classes.Social}>
                <Button btnType="Social" disabled={false}><SocialImage ImageType="facebook" /></Button>
                <Button btnType="Social" disabled={false}><SocialImage ImageType="twitter" /></Button>
                <Button btnType="Social" disabled={false}><SocialImage ImageType="google" /></Button>
            </div>
        </React.Fragment>
    );
}

export default Login;