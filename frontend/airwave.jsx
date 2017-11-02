import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signup, login, logout} from './actions/session_actions';
const Modal = require('react-modal');
import videojs from 'video.js';
import { fetchRandomWatchlist } from './actions/watchlist_actions';


document.addEventListener('DOMContentLoaded', () => {
  window.store = undefined;
  const root = document.getElementById('root');
  if (window.currentUser){
    store = configureStore({session: {currentUser: window.currentUser.user}, entities: {episodes: currentUser.episodes, series: currentUser.series }});
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  Modal.setAppElement(document.body);

  ReactDOM.render(<Root store={store} />, root);

  const current_user = document.getElementById("bootstrap-current-user");
  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchRandomWatchlist = fetchRandomWatchlist;
});


//TODOs
//-reposition styling by % instead of fixed
//-play button should toggle to pause
//-make progress bar functional
//-make play-bar sort of opaque
//-render errors
