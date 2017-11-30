import { RECEIVE_RESULTS } from '../actions/search_actions';
import { RECEIVE_EPISODES } from '../actions/episode_actions';
import merge from 'lodash/merge';

const SearchReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_RESULTS:
      return merge({}, action.results);
    case RECEIVE_EPISODES:
      return merge({}, action.episodes);
    default:
      return {};
  }
};

export default SearchReducer;
