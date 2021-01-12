import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const NavigationItem = props => {
    let cssClass = null;
    if (props.type === 'Main') {
        cssClass = classes.MainNavigationItem;
    }
    else cssClass = classes.SideNavigationItem;

    return(
        <li className={cssClass}>
            <NavLink 
                to={props.link}
                exact={props.exact}
                activeClassName={classes.active} >
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavigationItem;

