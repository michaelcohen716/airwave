import merge from 'lodash/merge';

import { RECEIVE_SERIES } from '../actions/watchlist_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SeriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERIES:
      return merge({}, state, {[action.series.id]: action.series});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.series);
    default:
      return state;
  }
};

export default SeriesReducer;
