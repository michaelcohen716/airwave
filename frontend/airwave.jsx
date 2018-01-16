import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signup, login, logout} from './actions/session_actions';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  window.store = undefined;
  const root = document.getElementById('root');
  if (window.currentUser){
    store = configureStore({session: {currentUser: window.currentUser.user}, entities: {episodes: currentUser.episodes, series: currentUser.series }});
    delete window.currentUser;
  } else {
    store = configureStore({});
  }
  Modal.setAppElement(document.body);

  ReactDOM.render(<Root store={store} />, root);

  const current_user = document.getElementById("bootstrap-current-user");
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});


//TODOs

//-make play-bar sort of opaque
//-render errors
