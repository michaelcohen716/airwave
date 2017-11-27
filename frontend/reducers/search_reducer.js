import { RECEIVE_RESULTS } from '../actions/search_actions';
import merge from 'lodash/merge';

const SearchReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_RESULTS:
      return merge({}, action.results);
    default:
      return {};
  }
};

export default SearchReducer;
