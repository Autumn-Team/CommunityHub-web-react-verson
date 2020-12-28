import React, { Component} from 'react';

import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render () {
        return (
            <React.Fragment>
                <main >
                    {this.props.children}
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;