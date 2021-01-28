import React from 'react';

import classes from './SideNavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Icons from '../../Icons/Icons';

const SideNavigationItems = props => {
    let area1 = null;
    let area2 = null;
    let area3 = null;

    switch(props.featureType){
        case ("MainEvent"):
            area1 = (
                <NavigationItem type="Side" link="/event/newEvent" >
                    <div>
                        <Icons IconType="createNew" />
                        Create new event
                    </div>
                </NavigationItem>
            );
            area2 = (
                <NavigationItem type="Side" link="/event/attendingEvent" >
                    <div>
                        <Icons IconType="eventIcon" />
                        Attending event
                    </div>
                </NavigationItem>
            );
            area3 = (
                <NavigationItem type="Side" link="/event/yourEvent" >
                    <div>
                        <Icons IconType="yourEventIcon" />
                        Your event
                    </div>
                </NavigationItem>
            );
            break;
        case ('DetailedEvent'):
            area1 = (
                <NavigationItem type="Side" link="/event" >
                    <div>
                        <Icons IconType="backIcon" />
                        Back to HomeEvent
                    </div>
                </NavigationItem>
            );
            area2 = (
                <NavigationItem type="Side" link="/#" >
                    <div>
                    <Icons IconType="editIcon" />
                        Edit event
                    </div>
                </NavigationItem>
            );
            area3 = null;
            break;
        case ('attendingEvent'):
            area1 = (
                <NavigationItem type="Side" link="/event" >
                    <div>
                        <Icons IconType="backIcon" />
                        Back to HomeEvent
                    </div>
                </NavigationItem>
            );
            area2 = (
                <NavigationItem type="Side" link="/event/newEvent" >
                    <div>
                        <Icons IconType="createNew" />
                        Create new event
                    </div>
                </NavigationItem>
            );
            area3 = (
                <NavigationItem type="Side" link="/event/yourEvent" >
                    <div>
                        <Icons IconType="yourEventIcon" />
                        Your event
                    </div>
                </NavigationItem>
            );
            break;
        case ('yourEvent'):
            area1 = (
                <NavigationItem type="Side" link="/event" >
                    <div>
                        <Icons IconType="backIcon" />
                        Back to HomeEvent
                    </div>
                </NavigationItem>
            );
            area2 = (
                <NavigationItem type="Side" link="/event/newEvent" >
                    <div>
                        <Icons IconType="createNew" />
                        Create new event
                    </div>
                </NavigationItem>
            );
            area3 = (
                <NavigationItem type="Side" link="/event/attendingEvent" >
                    <div>
                        <Icons IconType="eventIcon" />
                        Attending event
                    </div>
                </NavigationItem>
            );
            break;
        default:
            //do nothing
            break;
    }

    return(
        <ul className={classes.SideNavigationItems}>
            {area1}
            {area2}
            {area3}
        </ul>
    );
}

export default SideNavigationItems;