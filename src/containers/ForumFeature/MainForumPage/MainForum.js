import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
//import classes from './MainForumPage.module.css';
import SideNavBar from '../../../components/Navigation/SideNavBar/SideNavBar';
import Event from '../../../components/Event/Event';
import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';

const MainForumPage = props =>{
    const location = useLocation();
    const {onFetchEvents} = props;

    useEffect(() =>{
        onFetchEvents();
    }, [onFetchEvents, location]);
    let h2Title = null;
    let events = null;
    let eventType = null;
    let sideNav = null;
    switch (location.pathname) {
        case "/forum":
            h2Title = <h2>Next Forum</h2>;
            sideNav = <SideNavBar featureType="MainForum" />;
            events = <Spinner />;
            eventType = "forum";
            break;
        case "/forum/enteredEvent":
            h2Title = <h2>Attending Events List</h2>;
            sideNav = <SideNavBar featureType="enteredEvent" />;
            events = <Spinner />;
            eventType = "enterdForum";
            break;
        case "/event/yourForum":
            h2Title = <h2>Your Created Forum</h2>;
            sideNav = <SideNavBar featureType="yourForum" />;
            events = <Spinner />;
            eventType = "yourForum";
            break;
        default:
            h2Title = null;
            sideNav = null;
            events = null;
            eventType = null;
            break;
    }

    const seeMoreClickedHandler = (forumId) => {
        props.history.push('/forum/' + forumId);
    }


    if (!props.loading) {
        events = props.error ? 
            (<p className={classes.errMessage}>{props.error.message}</p>) : 
            (props.events.map(currentEvent => (  
                <Event key={currentEvent.id} 
                date={currentEvent.eventData.date} 
                title={currentEvent.eventData.title} 
                location={currentEvent.eventData.location}
                eventType={eventType}
                seeMoreClicked= {() => seeMoreClickedHandler(currentEvent.id)} />
            )));
        
        if (events.length === 0) events = <p className={classes.Empty}>There is no event at the moment</p>;  
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
export default connect(mapStateToProps, mapDispatchToProps)(MainForumPage);