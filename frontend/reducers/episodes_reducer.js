import merge from 'lodash/merge';

import { RECEIVE_WATCHLIST, RECEIVE_WATCHLIST_ADD } from '../actions/watchlist_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const WatchlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_WATCHLIST_ADD:
      const newEpisode = action.episodeId;
      return merge({}, state, { newEpisode });
    case RECEIVE_WATCHLIST:
      return action.episodes;
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.episodes);
    default:
      return state;
  }
};

export default WatchlistsReducer;
