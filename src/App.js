import React from 'react';

import Layout from './containers/Layout/Layout';
import Login from './containers/LoginPage/Login';

const App = props =>  {
    return (
        <Layout>
            <Login />
        </Layout>
    )
}

export default App;