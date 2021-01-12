import React from 'react';

import classes from './MainNavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem type="Main" link="/homePage" exact>HomePage</NavigationItem>
        <NavigationItem type="Main" link="/forum">Forum</NavigationItem>
        <NavigationItem type="Main" link="/event">Event</NavigationItem>
        <NavigationItem type="Main" link="/market">Market</NavigationItem>
        <NavigationItem type="Main" link="/message">Message</NavigationItem>
    </ul>
);

export default NavigationItems;