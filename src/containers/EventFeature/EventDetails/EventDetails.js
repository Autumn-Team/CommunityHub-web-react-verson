import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './EventDetails.module.css';
import SideNavBar from '../../../components/Navigation/SideNavBar/SideNavBar';
import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';

const EventDetails = props => {
    
    const { onFetchFullEvents } = props;
    useEffect(() => {
        onFetchFullEvents(props.match.params.eventId);
        
    },[onFetchFullEvents, props.match.params.eventId]);
    
    console.log(props.fullEvent);
    let fullEvent = <div className={classes.Loading} ><Spinner /></div>;

    if (!props.loading) {
        if (props.fullEvent) {
            fullEvent = 
                (<div className={classes.EventDetails}>
                    <section className={classes.MainDetails}>
                        <div className={classes.Cover}>this is cover</div>
                        <div className={classes.Details}>
                            <div className={classes.Text}>
                                <div>Time: {props.fullEvent.eventData.time} in {props.fullEvent.eventData.date}</div>
                                <h4>Name: {props.fullEvent.eventData.title}</h4>
                                <div>Description: {props.fullEvent.eventData.description}</div>
                                <div>Tag: {props.fullEvent.eventData.tag}</div>
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
                </div>);     
        }
        if (props.error){
            fullEvent = (<p className={classes.errMessage}>{props.error.message}</p>);
        }
    }

    return (
        <React.Fragment>
            <SideNavBar featureType="DetailedEvent" />
            {fullEvent}
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        fullEvent: state.event.fullEvent,
        loading: state.event.loading,
        error: state.event.error,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchFullEvents: (id) => dispatch(actions.fetchFullEvent(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);