import { connect } from 'react-redux';
// import NavBar from './nav_bar';
// import { login, logout, signup } from '../../actions/session_actions';
// import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,

  };
};
