import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_SHOW_EPISODE } from '../actions/episode_actions';
import merge from 'lodash/merge';


const CommentsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_SHOW_EPISODE:
      return merge({}, oldState, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, oldState, {[action.comment.id]: action.comment});
    default:
      return oldState;
  }
};

export default CommentsReducer;
