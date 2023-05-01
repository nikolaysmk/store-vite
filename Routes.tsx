import React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { LoginPage, RegisterPage, CartPage } from './features/Auth/pages';
import { Header, Footer } from './components';
import { isAuthenticated } from './services/helpers/auth';

const PrivateRoute: React.FC<{
  component: React.FC<RouteComponentProps>;
  path: string;
}> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

const PublicRoute: React.FC<{
  component: React.FC<RouteComponentProps>;
  path: string;
}> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Redirect to="/" />
      ) : (
        <div>
          <Header />
          <Component {...props} />
          <Footer />
        </div>
      )
    }
  />
);

const Routes: React.FC = () => (
  <Switch>
    <PublicRoute exact path="/login" component={LoginPage} />
    <PublicRoute exact path="/register" component={RegisterPage} />
    <PrivateRoute exact path="/cart" component={CartPage} />
    <Redirect from="/" to="/cart" />
  </Switch>
);

export default Routes;
