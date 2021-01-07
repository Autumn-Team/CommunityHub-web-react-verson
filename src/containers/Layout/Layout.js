import React from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';

const Layout = props =>  {
    const location = useLocation();
    let bar = null;
    if(location.pathname === "/homePage"){
        bar = <div>Something here</div>;
    }

    return (
        <React.Fragment>
            <main >
                {bar}
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;