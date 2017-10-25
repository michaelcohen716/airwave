import React from 'react';
import { connect } from 'react-redux';
// import { login, logout, signup } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {

  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
