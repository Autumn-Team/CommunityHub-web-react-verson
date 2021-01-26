import React from 'react';

import classes from './Event.module.css';
import Button from '../UI/Button/Button';

const Event = props => {
    
    const seeMore = <Button btnType='Link' clicked={props.seeMoreClicked}>See more</Button>;
    let eventButton = null;

    switch(props.eventType){
        case 'event':
            eventButton = null;
            break;
        case 'attendingEvent':
            eventButton = <Button btnType='Link' clicked={props.removeClicked}>Remove</Button>;
            break;
        case 'yourEvent':
            eventButton = <Button btnType='Link' clicked={props.deleteClicked}>Delete</Button>;
            break;
        default:
            // do nothing
            break;
    }

    return (
        <div className={classes.Event}>
            <div className={classes.Cover}>cover</div>
            <div className={classes.Date}>{props.date}</div>
            <h4 onClick={props.seeMoreClicked}>{props.title}</h4>
            <div className={classes.Location}>{props.location}</div>
            <div className={classes.Button}>
                <div>{eventButton}</div>
                <div>{seeMore}</div>
            </div>
        </div>
    );
};

export default Event;