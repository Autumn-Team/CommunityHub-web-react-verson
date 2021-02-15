import React, { useState } from 'react';
import { connect } from 'react-redux';

//import classes from './NewEvent.module.css';
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
            touch: false,

        },

        description: {
            label: 'Description',
            eventType: 'textarea',
            eventConfig:{
                placeholder: 'Please enter your description',
                row: '5',
                column: '50',
            },
            value:'',
            validation:{
                required: true,

            },
            valid: false,
            touch: false,
        }
    })

    
}