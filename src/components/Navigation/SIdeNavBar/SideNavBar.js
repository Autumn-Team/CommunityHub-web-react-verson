import React from 'react';

import classes from './SideNavBar.module.css';
import SideNavigationItems from '../NavigationItems/SideNavigationItems';

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
                <div>btn1</div>
                <div>btn2</div>
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