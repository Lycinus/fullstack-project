import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
  );

const Protected = ({ component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
       loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )}/>
  );

const Hidden = ({ render, path, loggedIn, exact }) => {
  const newProps = render().props;
  const Component = render().type;
  return(
    <Route path={path} exact={exact} render={(props) => (
      loggedIn ? (
        <Component {...props} newProps={newProps} />
      ) : (
        null
      )
    )}/>
  )};

const mapStateToProps = (state) => {
    return { loggedIn: Boolean(state.session.id) };
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))
export const HiddenRoute = withRouter(connect(mapStateToProps)(Hidden))