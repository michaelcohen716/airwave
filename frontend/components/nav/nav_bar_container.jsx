import React from 'react';
import { connect } from 'react-redux';
// import { login, logout, signup } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {

  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
