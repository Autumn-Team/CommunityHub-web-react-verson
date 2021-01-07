import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    let error = null;
    const inputClasses = [classes.InputElement];

    if (!props.valid && props.touched){
        inputClasses.push(classes.Invalid);
        error = <p className={classes.Error}>Please enter a valid value!</p>;
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed} />
            break;
        //More type...
        default:
            inputElement = <input 
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed} />
            break;
    }

    return (
        <React.Fragment>
            <div className={classes.Input} >
                <label className={classes.Label}>{props.label}</label>
                {inputElement}
            </div>
            {error}
        </React.Fragment>
        
    )
}

export default Input;