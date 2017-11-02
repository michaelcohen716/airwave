import { combineReducers } from 'redux';

import episodes from './episodes_reducer';
import series from './series_reducer';
import comments from './comments_reducer';

export default combineReducers({
  episodes,
  series,
  comments
});
