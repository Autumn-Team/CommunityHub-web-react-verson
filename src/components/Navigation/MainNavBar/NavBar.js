import React from 'react';

import classes from './NavBar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const NavBar = props => (
    <header className={classes.NavBar}>
        <div>Logo here</div>
        <nav>
            <NavigationItems />
        </nav>
        <div>account here</div>
    </header>
);

export default NavBar;