import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Login from './containers/LoginPage/Login';
import HomePage from './containers/HomePage/HomePage';

class App extends Component {
    render () {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/homePage" component={HomePage} />
                </Switch>
            </Layout>
        )
    }
}

export default App;