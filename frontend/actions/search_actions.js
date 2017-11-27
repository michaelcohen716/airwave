import * as SearchUtil from '../util/search_util';
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const search = (input) => dispatch => {
  return SearchUtil.search(input).then(results => dispatch(receiveResults));
};

const receiveResults = (results) => ({
  type: RECEIVE_RESULTS,
  results
});
