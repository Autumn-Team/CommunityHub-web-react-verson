import React, { useState } from 'react';

import classes from './NewEvent.module.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { updateObject, checkValidity } from '../../../sharedFunctions/utility';

const NewEvent = props => {
    const [eventForm, setEventForm] = useState({
        title: {
            label: 'Title: ',
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
            label: 'Description: ',
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
            label: 'Time: ',
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'hour',
                min: 0,
                max: 12,
            },
            value: '',
            validation: {
                required: true,
                min: 0,
                max: 12,
            },
            valid: false,
            touched: false,
        },
        minutes: {
            label: null,
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'minutes',
                min: 0,
                max: 59,
            },
            value: '',
            validation: {
                required: true,
                min: 0,
                max: 59,
            },
            valid: false,
            touched: false,
        },
        AMPMOption: {
            label: null,
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'AM', displayValue: 'AM'},
                    {value: 'PM', displayValue: 'PM'},
                ]
            },
            value: 'AM',
            validation: {
                required: true,
            },
            valid: true,
        },
        date: {
            label: 'Date',
            elementType: 'input',
            elementConfig: {
                type: 'date',
                placeholder: 'Date',
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        location: {
            label: 'Location',
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
            label: 'Tag',
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

    return(
        <React.Fragment>
            <h2>Create new event</h2>

        </React.Fragment>
    )
}

export default NewEvent;