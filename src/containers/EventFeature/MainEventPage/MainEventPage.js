import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './MainEventPage.module.css';
import SideNavBar from '../../../components/Navigation/SideNavBar/SideNavBar';
import Event from '../../../components/Event/Event';
import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';

const MainEventPage = props => {

    const location = useLocation();

    const { onFetchEvents } = props;

    useEffect(() =>{
        onFetchEvents();
    }, [onFetchEvents]);

    let h2Title = <h2>Next Event</h2>;
    let sideNav = <SideNavBar featureType="MainEvent" />;
    let events = <Spinner />;

    if (!props.loading) {
        events = props.error ? 
            (<p className={classes.errMessage}>{props.error.message}</p>) : 
            (props.events.map(currentEvent => (  
                <Event key={currentEvent.id} 
                date={currentEvent.eventData.date} 
                title={currentEvent.eventData.title} 
                location={currentEvent.eventData.location} />
            )));
        
        if (events.length === 0) events = <p className={classes.Empty}>There is no event at the moment</p>;  
    }

    if(location.pathname === "/event/attendingEvent"){
        h2Title = <h2>Attending Events List</h2>;
        sideNav = <SideNavBar featureType="attendingEvent" />;
        events = null;
    }
    if (location.pathname === "/event/yourEvent"){
        h2Title = <h2>Your Created Event</h2>;
        sideNav = <SideNavBar featureType="yourEvent" />;
        events = null;
    }

    return (
        <React.Fragment> 
            {sideNav}
            <section className={classes.EventContent} >                
                {h2Title}
                <div className={classes.EventList}>
                    {events}
                </div>
            </section>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        events: state.event.events,
        loading: state.event.loading,
        error: state.event.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchEvents: () => dispatch(actions.fetchEvents()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainEventPage);