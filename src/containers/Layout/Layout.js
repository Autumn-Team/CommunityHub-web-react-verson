import React from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navigation/NavBar';

const Layout = props =>  {
    const location = useLocation();
    let toolBar = null;
    if(location.pathname !== "/"){
        toolBar = <NavBar />;
    }

    return (
        <React.Fragment>
            {toolBar}
            <main >
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;