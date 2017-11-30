import merge from 'lodash/merge';

import { RECEIVE_WATCHLIST, RECEIVE_WATCHLIST_ADD, RECEIVE_SHOW_EPISODE, RECEIVE_EPISODES} from '../actions/episode_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SERIES } from '../actions/watchlist_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const EpisodesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_WATCHLIST_ADD:
      const newEpisode = action.episodeId;
      return merge({}, state, { newEpisode });
    case RECEIVE_WATCHLIST:
      return action.episodes;
    case RECEIVE_SHOW_EPISODE:
      return merge({}, state, {[action.episode.id]: action.episode} );
    case RECEIVE_CURRENT_USER:
    case RECEIVE_SERIES:
      return merge({}, state, action.episodes );
    case RECEIVE_COMMENT:
      const newState = merge({}, state);
      const episode = newState[action.comment.episode_id];
      episode.commentIds.push(action.comment.id);
      return newState;
    case RECEIVE_EPISODES:
      return merge({}, action.episodes);
    default:
      return state;
  }
};

export default EpisodesReducer;
