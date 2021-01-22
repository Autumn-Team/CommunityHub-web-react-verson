import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './MainEventPage.module.css';
import SideNavBar from '../../../components/Navigation/SideNavBar/SideNavBar';
import Event from '../../../components/Event/Event';
// import * as actions from '../../../store/actions/index';

const MainEventPage = props => {

    const location = useLocation();

    let h2Title = <h2>Next Event</h2>;
    let sideNav = <SideNavBar featureType="MainEvent" />;
    if(location.pathname === "/event/attendingEvent"){
        h2Title = <h2>Attending Events List</h2>;
        sideNav = <SideNavBar featureType="attendingEvent" />;
    }
    if (location.pathname === "/event/yourEvent"){
        h2Title = <h2>Your Created Event</h2>;
        sideNav = <SideNavBar featureType="yourEvent" />;
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

const mapStateToProps = state => {
    return {
        error: state.event.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainEventPage);