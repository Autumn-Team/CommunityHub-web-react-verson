import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Login from './containers/LoginPage/Login';
import HomePage from './containers/HomePage/HomePage';
import Event from './containers/EventFeature/MainEventPage/MainEventPage';
import NewEvent from './containers/EventFeature/NewEvent/NewEvent';
import EventDetails from './containers/EventFeature/EventDetails/EventDetails';

const App = props =>  {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/homePage" component={HomePage} />
                <Route path="/event" exact component={Event} />
                <Route path="/event/newEvent" component={NewEvent} />
                <Route path="/event/eventList" exact component={Event} />
                <Route path="/test" component={EventDetails} />
            </Switch>
        </Layout>
    )
}

export default App;