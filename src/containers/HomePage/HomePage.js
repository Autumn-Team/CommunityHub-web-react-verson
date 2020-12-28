import React, { Component } from 'react';

class HomePage extends Component {
    render () {
        return (
            <div>this is HomePage {this.props.location.pathname}</div>
        );
    };
}

export default HomePage;