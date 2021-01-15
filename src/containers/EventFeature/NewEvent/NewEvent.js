import React, { useState } from 'react';

import classes from './NewEvent.module.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { updateObject, checkValidity } from '../../../sharedFunctions/utility';

const NewEvent = props => {
    const [eventForm, setEventForm] = useState({
        title: {
            label: 'Title:',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Please enter event title',
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        description: {
            label: 'Description:',
            elementType: 'textarea',
            elementConfig: {
                placeholder: 'Please enter description',
                rows: '5',
                cols: '50'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        time: {
            label: 'Time:',
            elementType: 'input',
            elementConfig: {
                type: 'time',
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        date: {
            label: 'Date:',
            elementType: 'input',
            elementConfig: {
                type: 'date',
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        location: {
            label: 'Location:',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter your location',
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        tag: {
            label: 'Tag:',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter tag',
            },
            value: '',
            validation: {},
            valid: true,
        },
    })
    const [formIsValid, setFormIsValid] =  useState(false);

    const inputChangeHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(eventForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, eventForm[inputIdentifier].validation),
            touched: true,
        });
        const updatedEventForm = updateObject(eventForm, {
            [inputIdentifier]: updatedFormElement,
        });

        let checkFormIsValid = true;
        for(let inputIdenfifier in updatedEventForm){
            checkFormIsValid = updatedEventForm[inputIdenfifier].valid && checkFormIsValid;
        }

        setEventForm(updatedEventForm);
        setFormIsValid(checkFormIsValid);
    }

    const newEventSubmitHandler = (event) => {
        event.preventDefault();

        props.history.push('/aaaa');
    }

    const discardHandler = () => {
        props.history.goBack();
    }

    const fromElementArray = [];
    for (let key in eventForm){
        fromElementArray.push({
            id: key,
            config: eventForm[key]
        });
    }

    let form = (
        <form onSubmit={newEventSubmitHandler}>
            {fromElementArray.map(formElement => (
                <Input
                    key={formElement.id}
                    label={formElement.config.label}
                    elementType={formElement.config.elementType}
                    elementConfig = {formElement.config.elementConfig}
                    value={formElement.config.value}
                    valid={formElement.config.valid}
                    touched={formElement.config.touched}
                    changed={(event) => inputChangeHandler(event, formElement.id)} />
            ))}
            <div className={classes.ButtonGroup}>
                <Button btnType="Success" disabled={!formIsValid}>Save</Button>
                <Button disabled>Add document</Button>
                <Button clicked={discardHandler}>Discard</Button>
            </div>
        </form>
    )

    return(
        <div className={classes.NewEvent}>
            <h2>Create new event</h2>
            {form}
        </div>
    )
}

export default NewEvent;