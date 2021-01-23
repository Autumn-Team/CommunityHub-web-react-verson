import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './NewEvent.module.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { updateObject, checkValidity } from '../../../sharedFunctions/utility';
import Spinner from '../../../components/UI/Spinner/Spinner';
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
    }
    
    const discardHandler = () => {
        props.history.goBack();
    }

    let errMessage = null;
    if (props.error === 'no error') {
        errMessage = <Redirect to='/event' />;
    }
    else if (props.error) {
        errMessage = (<p className={classes.errMessage}>{props.error.message}</p>);
    }
    else errMessage = null;

    const fromElementArray = [];
    for (let key in eventForm){
        fromElementArray.push({
            id: key,
            config: eventForm[key]
        });
    }

    let form = (
        <div>
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
            {errMessage}
            <div className={classes.ButtonGroup}>
                <Button btnType="Success" clicked={newEventSubmitHandler} disabled={!formIsValid}>Save</Button>
                <Button disabled>Add document</Button>
                <Button clicked={discardHandler}>Discard</Button>
            </div>
        </div>
    );

    if (props.loading) {
        form = <Spinner />;
    }
    

    return(
        <section className={classes.NewEvent}>
            <h2>Create new event</h2>
            {form}
        </section>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.event.loading,
        error: state.event.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateEvent: (eventData) => dispatch(actions.createEvent(eventData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent);