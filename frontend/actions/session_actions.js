import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = ({user, episodes}) => ({
  type: RECEIVE_CURRENT_USER,
  user,
  episodes
});

export const signup = (user) => (dispatch) => {
  return SessionAPIUtil.signup(user).then((payload) => dispatch(receiveCurrentUser(payload)));
};

export const login = (user) => (dispatch) => {
  return SessionAPIUtil.login(user).then((payload) => dispatch(receiveCurrentUser(payload)));
};

export const logout = () => (dispatch) => {
  return SessionAPIUtil.logout().then((user) => dispatch({type: RECEIVE_CURRENT_USER, user: null}));
};

// session errors

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};
