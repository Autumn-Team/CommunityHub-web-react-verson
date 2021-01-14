import React from 'react';

import classes from './SideNavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Icons from '../../Icons/Icons';

const SideNavigationItems = props => {
    let btn1 = null;
    let btn2 = null;

    switch(props.featureType){
        case ("MainEvent"):
            btn1 = <div><Icons IconType="createNew" />Create new event</div>;
            btn2 = <div><Icons IconType="eventIcon" />Attending event</div>;;
            break;
        default:
            //do nothing
            break;
    }

    return(
        <ul className={classes.SideNavigationItems}>
            <NavigationItem type="Side" link="/newEvent" >{btn1}</NavigationItem>
            <NavigationItem type="Side" link="/st2" >{btn2}</NavigationItem>
        </ul>
    );
}

export default SideNavigationItems;