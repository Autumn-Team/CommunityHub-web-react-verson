import React from 'react';

import CreateNew from '../../assets/icons/createNew.jpg';
import EventIcon from '../../assets/icons/eventIcon.jpg';
import BackIcon from '../../assets/icons/backIcon.jpg';
import EditIcon from '../../assets/icons/editIcon.jpg';
import yourEventIcon from '../../assets/icons/yourEventIcon.jpg';
import eventAccept from '../../assets/icons/eventAccept.jpg';
import eventDeny from '../../assets/icons/eventDeny.jpg';
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
        case ("backIcon"):
            icon = <img src={BackIcon} className={classes.Icons} alt="Back Icon" />
            break;
        case ("editIcon"):
            icon = <img src={EditIcon} className={classes.Icons} alt="Edit Icon" />
            break;
        case ("yourEventIcon"):
            icon = <img src={yourEventIcon} className={classes.Icons} alt="your event Icon" />
            break;
        case ("eventAccept"):
            icon = <img src={eventAccept} className={classes.Icons} alt="event accept Icon" />
            break;   
        case ("eventDeny"):
            icon = <img src={eventDeny} className={classes.Icons} alt="event deny Icon" />
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