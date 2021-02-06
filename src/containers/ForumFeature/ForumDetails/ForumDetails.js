import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './EventDetails.module.css';
import SideNavBar from '../../../components/Navigation/SideNavBar/SideNavBar';
import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';

const ForumDetails = props => {
    
    const { onFetchFullForums } = props;
    useEffect(() => {
        onFetchFullForums(props.match.params.forumId);
        
    },[onFetchFullForums, props.match.params.forumId]);
    
    console.log(props.fullForum);
    let fullForum = <Spinner />;

    if (!props.loading) {
        if (props.fullForum) {
            fullForum = 
                (<div className={classes.ForumDetails}>
                    <section className={classes.ForumMainDetails}>
                        <div className={classes.Cover}>this is cover</div>
                        <div className={classes.Details}>
                            <div className={classes.Text}>
                                <div>Time: {props.fullForum.forumData.time} in {props.fullForum.forumData.date}</div>
                                <h4>Name: {props.fullForum.forumData.title}</h4>
                                <div>Description: {props.fullForum.forumData.description}</div>
                                <div>Tag: {props.fullForum.forumData.tag}</div>
                            </div>
                           
                        </div>
                    </section>
                    <section className={classes.SuggestForum}>
                        <div> More Information here</div>
                        <div> More Information here</div>
                        <div> More Information here</div>
                        <div> More Information here</div>
                    </section>
                </div>);     
        }
        if (props.error){
            fullForum = (<p className={classes.errMessage}>{props.error.message}</p>);
        }
    }

    return (
        <React.Fragment>
            <SideNavBar featureType="DetailedForum" />
            {fullForum}
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        fullForum: state.forum.fullForum,
        loading: state.forum.loading,
        error: state.forum.error,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchFullForums: (id) => dispatch(actions.fetchFullForum(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForumDetails);
