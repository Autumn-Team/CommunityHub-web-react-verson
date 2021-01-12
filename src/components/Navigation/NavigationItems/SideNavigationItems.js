import React from 'react';

import classes from './SideNavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const SideNavigationItems = props => (
    <ul className={classes.SideNavigationItems}>
        <NavigationItem type="Side" link="/st1" >bar1</NavigationItem>
        <NavigationItem type="Side" link="/st2" >bar2</NavigationItem>
    </ul>
);

export default SideNavigationItems;