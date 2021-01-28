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
                <div>
                    <Icon IconType="eventAccept"/>
                    Delete
                </div>
                <div>Information</div>
                <div>
                    <Icon IconType="eventAccept"/>
                    <Button btnType="Blacklink">Attended</Button>
                </div>
                <div>
                    <Icon IconType="eventDeny"/>
                    <Button btnType="Blacklink">Unsure</Button>
                </div>
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