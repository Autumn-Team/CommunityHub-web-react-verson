import React from 'react';

import classes from './SideNavBar.module.css';
import SideNavigationItems from '../NavigationItems/SideNavigationItems';

const SideNavBar = props => {
    return (
        <nav className={classes.SideNavBar}>
            <SideNavigationItems />
            <div>Search here</div>
            <div>page number</div>
        </nav>
    );
};

export default SideNavBar;