import React, { Component } from 'react';

import classes from './Login.module.css';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import SocialImage from '../../components/SocialImage/SocialImage';

class Login extends Component {
    state = {
        form: {
            Username: {
                label: 'Username: ',
                elementType: 'input',
                elementConfig: {
                    text: 'email',
                    placeholder: 'Please enter your username',
                },
                value: '',
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
        },
        formIsValid: false,
    }

    checkValidity (value, rules) {
        let isValid = true;

        if (rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        //More rules here

        return isValid;
    }

    inputChangedHandler = (event, inputIdenfifier) =>{
        const updatedForm = {...this.state.form};
        const updatedFormElement = {...updatedForm[inputIdenfifier]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[inputIdenfifier] = updatedFormElement;

        // Check validity of all element
        let formIsValid = true;
        for(let Identifier in updatedForm) {
            formIsValid = updatedForm[Identifier].valid && formIsValid;
        }

        // update state
        this.setState({form: updatedForm, formIsValid: formIsValid});
    
    }

    render () {
        //get form info in state
        const formElementArray = [];
        for (let element in this.state.form){
            formElementArray.push({
                id: element,
                config: this.state.form[element]
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
                        // shouldValidation={element.config.validation}
                        touched={element.config.touched}
                        changed={(event) => this.inputChangedHandler(event, element.id)} />
                ))}
                <div className={classes.Link}><Button btnType="Link">Forgot Password</Button></div>
                <Button btnType="Success" disabled={!this.state.formIsValid}>LOGIN</Button>
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
    };
}

export default Login;