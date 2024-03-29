import React, { useState } from 'react';

import classes from './Register.module.css';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObject, checkValidity} from '../../sharedFunctions/utility';
import { authRegister, useAuthState, useAuthDispatch  } from '../../useContext/index';

const Register = props => {
    const [formStructure, setFormStructure] = useState({
        Fullname: {
            label: 'Full Name: ',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Please enter your full name',
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        Email: {
            label: 'Email: ',
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
        Address: {
            label: 'Address: ',
            elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Please enter your address',
        },
        value:'',
        validation: {},
        valid: false,
        touched: false,
        },
        Phone: {
            label: 'Phone: ',
            elementType: 'input',
        elementConfig: {
            type: 'number',
            placeholder: 'Please enter your phone number',
        },
        value:'',
        validation: {
            required: true,
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
                comparedCPass: true,
            },
            valid: false,
            touched: false,
        },
        ConfirmPassword: {
            label: 'Confirm Password: ',
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Please re-enter your password',
            },
            value: '',
            validation: {
                required: true,
                comparedPass: true,
            },
            valid: false,
            touched: false,
        },
    });
    const [formIsValid, setFormIsValid] = useState(false);

    const { token, loading, error } = useAuthState();
    const dispatch = useAuthDispatch();

    const inputChangedHandler = (event, inputIdenfifier) => {
        const updatedFormElement = updateObject(formStructure[inputIdenfifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, formStructure[inputIdenfifier].validation, 
                formStructure.Password.value, formStructure.ConfirmPassword.value),
            touched: true,
        })
        const updatedForm = updateObject(formStructure, {
            [inputIdenfifier] : updatedFormElement,
        })

        // Check validity of all element
        let checkFormIsValid = true;
        for(let Identifier in updatedForm) {
            checkFormIsValid = updatedForm[Identifier].valid && checkFormIsValid;
        }
        // update state
        setFormStructure(updatedForm);
        setFormIsValid(checkFormIsValid);
    }

    const registerEventHandler = (event) => {
        event.preventDefault();
        authRegister(dispatch, formStructure.Email.value, formStructure.Password.value)
    }

    const loginEventHandler = () => {
        props.history.push('/');
    }

    let errorMessage = null;
    if (error) {
        errorMessage = (<p className={classes.errorMessage}>{error.message}</p>);
    }

    //get form info in state
    const formElementArray = [];
    for (let element in formStructure){
        formElementArray.push({
            id: element,
            config: formStructure[element]
        });
    }

    //create form components
    let form = (
        <form onSubmit={registerEventHandler}>
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
           {errorMessage}
            <Button btnType="Success" disabled={!formIsValid} clicked={registerEventHandler}>REGISTER</Button>
        </form>
    );

    if (loading) {
        form = <Spinner />;
    }

    if (token) {
        props.history.push('/homePage');
    }

    return (
        <React.Fragment>
            <div className={classes.RLogo}><Logo /></div>
            <h2 className={classes.Title}>REGISTER</h2>  
            <div className={classes.Form}>
                {form}
            </div>
            <h4 className={classes.Or}>OR</h4>
            <div className={classes.Login}><Button btnType="Link" clicked={loginEventHandler}>Log in here</Button></div>
            
        </React.Fragment>
    );
}

export default Register;