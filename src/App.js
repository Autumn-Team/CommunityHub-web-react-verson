import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Login from './containers/LoginPage/Login';
import HomePage from './containers/HomePage/HomePage';
import Event from './containers/EventFeature/MainEventPage/MainEventPage';

const App = props =>  {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/homePage" component={HomePage} />
                <Route path="/event" component={Event} />
            </Switch>
        </Layout>
    )
}

export default App;