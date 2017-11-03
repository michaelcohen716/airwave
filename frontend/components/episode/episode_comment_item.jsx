import React from 'react';

const Comment = ({ body, username }) => (
  <div className="comment-item-holder">
    <div className="comment-avatar fa fa-user">

    </div>
    <div>
      <div className="comment-username">{username}</div>
      <div className="comment-body">{body}</div>
    </div>
  </div>
);

export default Comment;
