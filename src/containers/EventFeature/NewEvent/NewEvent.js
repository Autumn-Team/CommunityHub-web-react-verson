import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './NewEvent.module.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { updateObject, checkValidity } from '../../../sharedFunctions/utility';
import * as actions from '../../../store/actions/index';

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

    const [formIsSubmited, setFormIsSubmited] = useState(false);

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
        const formData = {};
        for (let formElementIdentifier in eventForm){
            formData[formElementIdentifier] = eventForm[formElementIdentifier].value;
        }
        
        const newEvent = {
            eventData: formData,
            creatorId: "something",
        }
        
        props.onCreateEvent(newEvent);
        setFormIsSubmited(true);
    }
    
    let errMessage = null;
    //May need to decrease number of render to 1 (current is 2)
    if (formIsSubmited && props.error === 'no error') {
        errMessage = <Redirect to='/event' />;
        console.log('no error');
    }
    else if (formIsSubmited && props.error) {
        errMessage = (<p className={classes.errMessage}>{props.error.message}</p>);
    }
    else errMessage = null;

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
            
            
        </form>
    )

    let buttonGroup = (
        <div className={classes.ButtonGroup}>
            <Button btnType="Success" clicked={newEventSubmitHandler} disabled={!formIsValid}>Save</Button>
            <Button disabled>Add document</Button>
            <Button clicked={discardHandler}>Discard</Button>
        </div>
    );

    return(
        <div className={classes.NewEvent}>
            <h2>Create new event</h2>
            {form}
            {errMessage}
            {buttonGroup}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.event.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateEvent: (eventData) => dispatch(actions.createEvent(eventData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent);