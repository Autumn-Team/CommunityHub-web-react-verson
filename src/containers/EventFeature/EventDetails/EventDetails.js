import React, { useState} from 'react';

import classes from './EventDetails.module.css';
import SideNavBar from '../../../components/Navigation/SideNavBar/SideNavBar';

const EventDetails = props => {
    const [loadEvent, setLoadEvent] = useState('null');

    let fullEvent = <p>Event not found </p>;

    if (loadEvent){
        fullEvent = (
            <React.Fragment>
                <SideNavBar featureType="DetailedEvent" />
                <div className={classes.EventDetails}>
                    <section className={classes.MainDetails}>
                        <div className={classes.Cover}>this is cover</div>
                        <div className={classes.Details}>
                            <div className={classes.Text}>
                                <div>Time here</div>
                                <h4>Name: </h4>
                                <div>Description: </div>
                                <div>Tag:</div>
                            </div>
                            <div className={classes.Map}>this is map</div>
                        </div>
                    </section>
                    <section className={classes.SuggestionEvent}>
                        <div> More Information here</div>
                        <div> More Information here</div>
                        <div> More Information here</div>
                        <div> More Information here</div>
                    </section>
                </div>
            </React.Fragment>
        );
    }

    return fullEvent;
}

export default EventDetails;