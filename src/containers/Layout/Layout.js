import React from 'react';
import { useLocation } from 'react-router-dom';

import classes from './Layout.module.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navigation/NavBar';

const Layout = props =>  {
    const location = useLocation();
    let navBar = null;
    if(location.pathname !== "/"){
        navBar = <NavBar />;
    }

    return (
        <React.Fragment>
            {navBar}
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;