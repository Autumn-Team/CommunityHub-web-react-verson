import React from 'react';

import Layout from './containers/Layout/Layout';
import Register from './containers/RegisterPage/registerPage';

const App = props =>  {
    return (
        <Layout>
            <Register />
        </Layout>
    )
}

export default App;
