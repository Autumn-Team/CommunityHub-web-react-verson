import React from 'react';

import classes from './NavBar.module.css';
import MainNavigationItems from '../NavigationItems/MainNavigationItems';

const NavBar = props => (
    <header className={classes.NavBar}>
        <div>Logo here</div>
        <nav>
            <MainNavigationItems />
        </nav>
        <div>account here</div>
    </header>
);

export default NavBar;