import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signup, login, logout} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  // if (window.currentUser){
  //   store = configureStore({session: {currentUser: window.currentUser}});
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }

  const current_user = document.getElementById("bootstrap-current-user");
  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;

});
