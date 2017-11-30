import * as SearchUtil from '../util/search_util';
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const fetchSearchResults = (input) => dispatch => {
  return SearchUtil.search(input).then(results => dispatch(receiveResults(results)));
};

const receiveResults = (results) => ({
  type: RECEIVE_RESULTS,
  results
});
