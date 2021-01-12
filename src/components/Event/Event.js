import React from 'react';

import classes from './Event.module.css';

const Event = props => {
    
    return (
        <div className={classes.Event}>
            <div className={classes.Cover}>cover</div>
            <div className={classes.Date}>{props.date}</div>
            <h4>{props.title}</h4>
            <div className={classes.Location}>{props.location}</div>
            <div className={classes.Button}>
                remove and See more
            </div>
        </div>
    );
};

export default Event;