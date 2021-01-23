import React, { useState } from 'react';

import classes from './Register.module.css';
import Logo from '../../components/Logo/Logo';
import Banner from '../../components/Banner/Banner';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import SocialImage from '../../components/SocialImage/SocialImage';

const Register = props => {
    const [formStructure, setFormStructure] = useState({
        Username: {
            label: 'Name: ',
            elementType: 'input',
            elementConfig: {
                text: 'email',
                placeholder: 'Please enter your name',
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
                text: 'email',
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
            text: 'address',
            placeholder: 'Please enter your address',
        },
        value:'',
        validation: {
            required: true,
        },
        valid: false,
        touched: false,
        },
        Phone: {
            label: 'Phone: ',
            elementType: 'input',
        elementConfig: {
            text: 'phone',
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
                text: 'password',
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
                text: 'password',
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
            <Logo />
            <Banner/>   
            <div className={classes.Form}>
                {form}
            </div>
            
            <div className={classes.Register}><Button btnType="Link">Log in here</Button> or use social media</div>
            <div className={classes.Social}>
                <Button btnType="Social" disabled={false}><SocialImage ImageType="facebook" /></Button>
                <Button btnType="Social" disabled={false}><SocialImage ImageType="twitter" /></Button>
                <Button btnType="Social" disabled={false}><SocialImage ImageType="google" /></Button>
            </div>
        </React.Fragment>
    );
}

export default Register;