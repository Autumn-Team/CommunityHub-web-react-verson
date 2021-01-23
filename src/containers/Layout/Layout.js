import React from 'react';

import Footer from '../../components/Footer/Footer';

const Layout = props =>  {
    return (
        <React.Fragment>
            <main >
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;