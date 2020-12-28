import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import Login from './containers/LoginPage/Login';

class App extends Component {
    render () {
        return (
            <Layout>
                <Login />
            </Layout>
        )
    }
}

export default App;