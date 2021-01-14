import React from 'react';

import CreateNew from '../../assets/icons/createNew.jpg';
import EventIcon from '../../assets/icons/eventIcon.jpg';
import classes from './Icons.module.css';

const Icons = props => {
    let icon = null;

    switch(props.IconType){
        case ("createNew"):
            icon = <img src={CreateNew} className={classes.Icons} alt="Create New" />
            break;
        case ("eventIcon"):
            icon = <img src={EventIcon} className={classes.Icons} alt="Event Icon" />
            break;
        default:
            //do nothing
            break;
    }

    return(
        <React.Fragment>
            {icon}
        </React.Fragment>
    );
};

export default Icons;