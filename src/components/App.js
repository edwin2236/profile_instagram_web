import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory
} from 'react-router-dom';

import { Routes } from '../routes';
import { FakeAuth } from './FakeAuth'
import { SignIn } from '../pages/security/SignIn';
import { NotFound } from '../pages/NotFound';
import { Profile } from '../pages/profile';

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={Routes.app_sign_in} component={SignIn} />
                <Route path={Routes.app_profile} component={Profile} />
                {/* <PrivateRoute path={Routes.app_dashboard}>
                    <DashboardMain />
                </PrivateRoute> */}
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (FakeAuth.isAuthenticated())
                    return children
                else
                    return <Redirect to={{ pathname: Routes.app_sign_in, state: { from: location } }} />
            }}
        />
    );
};


const SingOut = () => {
    let history = useHistory();
    history.length = 1;
    history.replace(Routes.app_security_login_users);
    FakeAuth.signout();

    return <SignIn />
};

