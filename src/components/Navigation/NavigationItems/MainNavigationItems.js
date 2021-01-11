import React from 'react';

import classes from './MainNavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/homePage" exact>HomePage</NavigationItem>
        <NavigationItem link="/forum">Forum</NavigationItem>
        <NavigationItem link="/event">Event</NavigationItem>
        <NavigationItem link="/market">Market</NavigationItem>
        <NavigationItem link="/message">Message</NavigationItem>
    </ul>
);

export default NavigationItems;