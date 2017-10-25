import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, logged_in}) => (
  <Route path={path} render={(props) => (
    !logged_in ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const Protected = ({component: Component, path, logged_in}) => (
  <Route path={path} render={(props) => (
      logged_in ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/login" />
      )
    )}/>
);

const mapStateToProps = state => {
  return {logged_in: Boolean(state.session.currentUser)};
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
