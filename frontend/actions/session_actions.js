import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signup = (user) => (dispatch) => {
  return SessionAPIUtil.signup(user).then(dispatch(receiveCurrentUser(user)));
};

export const login = (user) => (dispatch) => {
  return SessionAPIUtil.login(user).then(dispatch(receiveCurrentUser(user)));
};

export const logout = () => (dispatch) => {
  return SessionAPIUtil.logout().then(dispatch(receiveCurrentUser(null)));
};

// session errors

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};
