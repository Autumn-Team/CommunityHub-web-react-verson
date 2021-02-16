import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './MainEventPage.module.css';
import SideNavBar from '../../../components/Navigation/SideNavBar/SideNavBar';
import Event from '../../../components/Event/Event';
import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';
import { useAuthState } from '../../../useContext/index';

const MainEventPage = props => {

    const location = useLocation();
    const { token, userId } = useAuthState();
    const { onFetchEvents, onFetchEventsByUser } = props;

    useEffect(() =>{
        if (location.pathname === "/event/yourEvent") {
            onFetchEventsByUser(token, userId);
        }
        else {
            onFetchEvents(token);
        } 
    }, [onFetchEvents, onFetchEventsByUser, location, token, userId]);

    let h2Title = null;
    let sideNav = null;
    let events = null;
    let fetchEvent = null;
    let eventType = null;

    switch (location.pathname) {
        case "/event":
            h2Title = <h2>Next Event</h2>;
            sideNav = <SideNavBar featureType="MainEvent" />;
            events = <Spinner />;
            fetchEvent = [...props.events];
            eventType = "event";
            break;
        case "/event/attendingEvent":
            h2Title = <h2>Attending Events List</h2>;
            sideNav = <SideNavBar featureType="attendingEvent" />;
            events = <Spinner />;
            fetchEvent = [...props.events]; // need change
            eventType = "attendingEvent";
            break;
        case "/event/yourEvent":
            h2Title = <h2>Your Created Event</h2>;
            sideNav = <SideNavBar featureType="yourEvent" />;
            events = <Spinner />;
            fetchEvent = [...props.eventsByUser];
            eventType = "yourEvent";
            break;
        default:
            h2Title = null;
            sideNav = null;
            events = null;
            fetchEvent = null;
            eventType = null;
            break;
    }

    const seeMoreClickedHandler = (eventId) => {
        props.history.push('/event/' + eventId);
    }


    if (!props.loading) {
        events = props.error ? 
            (<p className={classes.errMessage}>{props.error.message}</p>) : 
            (fetchEvent.map(currentEvent => (  
                <Event key={currentEvent.id} 
                date={currentEvent.eventData.date} 
                title={currentEvent.eventData.title} 
                location={currentEvent.eventData.location}
                eventType={eventType}
                seeMoreClicked= {() => seeMoreClickedHandler(currentEvent.id)} />
            )));
        
        if (fetchEvent.length === 0) events = <p className={classes.Empty}>There is no event at the moment</p>;  
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
        eventsByUser: state.event.eventByUser,
        loading: state.event.loading,
        error: state.event.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchEvents: (token) => dispatch(actions.fetchEvents(token)),
        onFetchEventsByUser: (token, userId) => dispatch(actions.fetchEventsByUser(token, userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainEventPage);