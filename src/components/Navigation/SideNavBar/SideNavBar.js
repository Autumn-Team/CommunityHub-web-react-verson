import React from 'react';

import classes from './SideNavBar.module.css';
import SideNavigationItems from '../NavigationItems/SideNavigationItems';
import Button from '../../UI/Button/Button';
import Icon from '../../Icons/Icons';

const SideNavBar = props => {
    let nav = null;

    switch(props.featureType){
        case ('MainEvent'):
            nav = <nav className={classes.SideNavBar}>
                <SideNavigationItems featureType={props.featureType} />
                <div>Search here</div>
                <div>page number</div>
            </nav>
            break;
        case ('DetailedEvent'):
            nav = <nav className={classes.SideNavBar}>
                <SideNavigationItems featureType={props.featureType} />
                <div>Information</div>
                <div><Button btnType="Link"><Icon IconType="eventAccept"/>Attended</Button></div>
                <div><Button btnType="Link"><Icon IconType="eventDeny"/>Unsure</Button></div>
            </nav>
            break;
        case ('attendingEvent'):
            nav = <nav className={classes.SideNavBar}>
                <SideNavigationItems featureType={props.featureType} />
                <div>Search here</div>
                <div>page number</div>
            </nav>
            break;
        case ('yourEvent'):
            nav = <nav className={classes.SideNavBar}>
                <SideNavigationItems featureType={props.featureType} />
                <div>Search here</div>
                <div>page number</div>
            </nav>
            break;
        default:
            break;
    }

    return nav;
};

export default SideNavBar;