import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    switchModal: () => dispatch(openModal('signup')),
    closeModal: () => dispatch(closeModal()),
    submitAction: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    formType: "login"
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
