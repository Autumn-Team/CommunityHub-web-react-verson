import React from 'react';
import { useLocation } from 'react-router-dom';

import classes from './MainEventPage.module.css';
import SideNavBar from '../../../components/Navigation/SideNavBar/SideNavBar';
import Event from '../../../components/Event/Event';

const MainEventPage = () => {
    const location = useLocation();

    let h2Title = <h2>Next Event</h2>;
    let sideNav = <SideNavBar featureType="MainEvent" />;
    if(location.pathname === "/event/eventList"){
        h2Title = <h2>List Event</h2>;
        sideNav = <SideNavBar featureType="EventList" />;
    }

    return (
        <React.Fragment> 
            {sideNav}
            <section className={classes.EventContent} >                
               {h2Title}
               <div className={classes.EventList}>
                <Event date="20-10-2020" title="Test title" location="this is location" />
                <Event date="20-10-2020" title="Test title" location="this is location" />
                <Event date="20-10-2020" title="Test title" location="this is location" />
                <Event date="20-10-2020" title="Test title" location="this is location" />
               </div>
            </section>
        </React.Fragment>
    )
}

export default MainEventPage;