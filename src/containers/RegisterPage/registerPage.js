import React, { useState } from 'react';

import classes from './Register.module.css';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

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
            },
            valid: false,
            touched: false,
        },
    });
    const [formIsValid, setFormIsValid] = useState(false);

    const checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        //More rules here

        return isValid;
    }

    const inputChangedHandler = (event, inputIdenfifier) => {
        const updatedForm = {...formStructure};
        const updatedFormElement = {...updatedForm[inputIdenfifier]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[inputIdenfifier] = updatedFormElement;

        // Check validity of all element
        let checkFormIsValid = true;
        for(let Identifier in updatedForm) {
            checkFormIsValid = updatedForm[Identifier].valid && checkFormIsValid;
        }
        // update state
        setFormStructure(updatedForm);
        setFormIsValid(checkFormIsValid);
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
        <form onSubmit="/">
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
           
            <Button btnType="Success" disabled={!formIsValid}>REGISTER</Button>
        </form>
    );

    return (
        <React.Fragment>
            <div className={classes.RLogo}><Logo /></div>
            <h2 className={classes.Title}>REGISTER</h2>  
            <div className={classes.Form}>
                {form}
            </div>
            <h4 className={classes.Or}>OR</h4>
            <div className={classes.Register}><Button btnType="Link">Log in here</Button></div>
            
        </React.Fragment>
    );
}

export default Register;