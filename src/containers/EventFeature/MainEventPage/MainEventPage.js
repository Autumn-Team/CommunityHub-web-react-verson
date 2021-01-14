import React from 'react';

import classes from './MainEventPage.module.css';
import SideNavBar from '../../../components/Navigation/SIdeNavBar/SideNavBar';
import Event from '../../../components/Event/Event';

const MainEventPage = () => {
    return (
        <React.Fragment> 
            <SideNavBar featureType="MainEvent" />
            <section className={classes.EventContent} >                
               <h2>Next Event</h2>
               <div className={classes.EventList}>
                <Event date="20-10-2020" title="Test title" location="this is location" />
                <Event date="20-10-2020" title="Test title" location="this is location" />
                <Event date="20-10-2020" title="Test title" location="this is location" />
               </div>
            </section>
        </React.Fragment>
    )
}

export default MainEventPage;