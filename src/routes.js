import React from 'react';
//import { Router, Route } from 'react-router';
import { Router, Switch, Route } from 'react-router-dom'

import App from './components/App';
import Login from './components/Login';
import SignIn from './components/SignIn';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (

    <Router {...props}>
        <Route path="/" component={App} />        
        <Route path="/login" component={Login} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
    </Router>
);

export default Routes;