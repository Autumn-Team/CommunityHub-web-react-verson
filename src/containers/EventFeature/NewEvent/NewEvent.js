import React, { useState } from 'react';

import classes from './NewEvent.module.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

const NewEvent = props => {
    const [formStructure, setFormStructure] = useState({
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
        
    })

    return(
        <React.Fragment>
            <h2>Create new event</h2>

        </React.Fragment>
    )
}

export default NewEvent;