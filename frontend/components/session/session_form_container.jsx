import React from 'react';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps);
  const formType = ownProps.location.pathname == '/signup' ? "signup" : "login";
  const submitAction = (formType == 'login') ? login : signup;
  return {
    submitAction: user => dispatch(submitAction(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
