import React, { Component} from 'react';

class Layout extends Component {
    render () {
        return (
            <React.Fragment>
                <main >
                    {this.props.children}
                </main>
                <div>This is footer</div>
            </React.Fragment>
        )
    }
}

export default Layout;