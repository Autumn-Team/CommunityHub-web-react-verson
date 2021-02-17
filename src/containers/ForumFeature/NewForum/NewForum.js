import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './NewForum.module.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { updateObject, checkValidity } from '../../../sharedFunctions/utility';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {instance as axios} from '../../../axios-instance';
import errorHandler from '../../../sharedFunctions/errorHandler';
import * as actions from '../../../store/actions/index';

const NewForum = props =>{
    const[forumForm, setForumForm] = useState({
        title:{
            label: 'Title',
            eventType: 'input',
            eventConfig:{
                type :'text',
                placeholder:'Please enter your forum title',
            },
            value:'',
            validation:{
                required: true,

            },
            valid: false,
            touched: false,

        },

        content: {
            label: 'Content',
            eventType: 'textarea',
            eventConfig:{
                placeholder: 'Please enter your content',
                row: '50',
                column: '50',
            },
            value:'',
            validation:{
                required: true,

            },
            valid: false,
            touched: false,
        },
        tag: {
            label: 'Tag',
            eventType: 'input',
            eventCOnfig:{
                palceholder: 'Please enter your tag.',
                type: 'text',
            },
            value: '',
            validation:{
                required: true,
            },
            valid: true,
            touched: false,
        },
    })
    const [formIsValid, setFormIsValid] = useState(false);
    
    const inputChangeHandler = (forum, inputIdentifier) =>{
        const updatedFormElement = updateObject(forumForm[inputIdentifier],{
            value: forum.target.value,
            valid: checkValidity(forum.target.value, forumForm[inputIdentifier].validation),
            touched: true,
        });
        const updatedForumForm = updateObject(forumForm, {
            [inputIdentifier]: updatedFormElement,
        });

        let checkFormIsValid = true;
        for(let inputIdenfifier in updatedForumForm){
            checkFormIsValid = updatedForumForm[inputIdenfifier].valid && checkFormIsValid;
        }

        setForumForm(updatedForumForm);
        setFormIsValid(checkFormIsValid);
        
    }

    const newEventSubmitHandler = (forum) => {
        forum.preventDefault();
        const formData = {};
        for (let formElementIdentifier in forumForm){
            formData[formElementIdentifier] = forumForm[formElementIdentifier].value;
        }
        
        const newForum = {
            forumData: formData,
            creatorId: "something",
        }
        
        props.onCreateEvent(newForum);
    }
    
    const discardHandler = () => {
        props.history.goBack();
       
    }

    if (props.error === 'no error') {
        props.history.push('/forum');
    }

    const fromElementArray = [];
    for (let key in forumForm){
        fromElementArray.push({
            id: key,
            config: forumForm[key]
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
                        changed={(forum) => inputChangeHandler(forum, formElement.id)} />
                ))}         
            </form>
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
        <section className={classes.NewForum}>
            <h2>Create new forum</h2>
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
        onCreateEvent: (forumData) => dispatch(actions.createEvent(forumData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)( errorHandler(NewForum,axios));