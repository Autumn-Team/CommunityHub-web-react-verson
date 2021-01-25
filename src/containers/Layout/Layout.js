import React from 'react';
import { useLocation } from 'react-router-dom';

import classes from './Layout.module.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navigation/MainNavBar/NavBar';

const Layout = props =>  {
    const location = useLocation();

    let navBar = null;
    let cssClass = null;

    if(location.pathname === "/"){
        navBar = null;
        cssClass = classes.Content1;
    }
    else {
        navBar = <NavBar />;
        cssClass = classes.Content2;
    }

    return (
        <React.Fragment>
            {navBar}
            <main className={cssClass}>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;