import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { login, logout, signup } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({session}) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => {

  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
