import * as CommentUtil from '../util/comment_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const createComment = comment => dispatch => {
  return CommentUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)));
};
