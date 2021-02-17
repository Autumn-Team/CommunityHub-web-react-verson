import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Login from './containers/LoginPage/Login';
import HomePage from './containers/HomePage/HomePage';
import Event from './containers/EventFeature/MainEventPage/MainEventPage';
import NewEvent from './containers/EventFeature/NewEvent/NewEvent';
import EventDetails from './containers/EventFeature/EventDetails/EventDetails';
import NewForum from './containers/ForumFeature/NewForum/NewForum';
import ForumDetails from './containers/ForumFeature/ForumDetails/ForumDetails';
import Register from './containers/RegisterPage/registerPage';

const App = props =>  {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/homePage" component={HomePage} />
                <Route path="/event" exact component={Event} />
                <Route path="/event/newEvent" component={NewEvent} />
                <Route path="/event/yourEvent" exact component={Event} />
                <Route path="/event/attendingEvent" exact component={Event} />
                <Route path="/event/:eventId" exact component={EventDetails} />
                <Route path="/forum/newForum" component={NewForum} />
                <Route path="/forum/:forumId" exact component={ForumDetails} />

            </Switch>
        </Layout>
    )
}

export default App;