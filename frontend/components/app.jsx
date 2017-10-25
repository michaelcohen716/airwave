import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Redirect, Switch,
  Link, HashRouter}
  from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './nav/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
  return (
    <div className="no-resize">
      <NavBarContainer />
      <h1> </h1>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />

    </div>
  );
};

export default App;
