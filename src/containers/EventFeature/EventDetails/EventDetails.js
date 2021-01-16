import React, { useState} from 'react';

import classes from './EventDetails.module.css';

const EventDetails = props => {
    const [loadEvent, setLoadEvent] = useState('null');

    let fullEvent = <p>Event not found </p>;

    if (loadEvent){
        fullEvent = <div>have event here</div>
    }

    return fullEvent;
}

export default EventDetails;