import React, { useState } from 'react';

import classes from './Reset.module.css';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { checkValidity, updateObject } from '../../sharedFunctions/utility';

const Reset = props =>{
    const[resetForm,setResetForm] = useState({
        VertifyCode:{
            label:'Vertify code',
            elementType:'input',
            elementConfig:{
                placeholder: 'Please enter your verified code ',
                type: 'text',
            },
            value : '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
        },
        NewPassword: {
            label:'New password: ',
            elementType: 'input',
            elementConfig:{
                placeholder: 'Please enter your new password ',
                type:  'password',

            },
            value : '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
        },
        ConfirmPassword: {
            label:'Confirm password: ',
            elementType: 'input',
            elementConfig:{
                placeholder: "Please confirm your new password ",
                type:  'password',

            },
            value : '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
        },
    });
    const[formValidation, setFormIsValid] = useState(false);

    const inputChangedHandler = (event, inputIdentifier) =>{
        const updatedFormElement= updateObject(resetForm[inputIdentifier],{
            value: event.target.value,
            valid: checkValidity(event.target.value, resetForm[inputIdentifier].validation),
            touched: true,
        })

        const updatedResetForm = updateObject(resetForm, {
            [inputIdentifier] : updatedFormElement,
        })
        //CHECK validity of all elements
        let checkFormIsValid = true;
        for(let Identifier in updatedResetForm){
           checkFormIsValid =  updatedResetForm[Identifier].valid && checkFormIsValid;
        }
        setResetForm(updatedResetForm);
        setFormIsValid(checkFormIsValid);
    }
    const resetEventHandler = (event) => {
        event.preventDefault();
        //handle event
        props.history.push('/homePage');
    }

    //get form info in state
    const formElementArray = [];
    for (let element in resetForm){
        formElementArray.push({
            id: element,
            config: resetForm[element]
        });
    }

    //create form components
    let form = (
        <form onSubmit={resetEventHandler}>
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
            <Button btnType="Success" disabled={!formValidation}>Change password</Button>
        </form>
    );
    return (
        <React.Fragment>
            <Logo />
            <div className={classes.Form}>
                {form}
            </div>
            
        </React.Fragment>
    );
}
export default Reset;
