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
     let h2title = null;
     let events = null;
     let eventType = null;
     let sideNav = null;

}
export default connect(mapStateToProps, mapDispatchToProps)(MainForumPage);