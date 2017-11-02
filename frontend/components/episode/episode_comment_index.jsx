import EpisodeCommentForm from './episode_comment_form';
import EpisodeCommentItem from './episode_comment_item';
import React from 'react';

class EpisodeCommentIndex extends React.Component {


  render(){

    const comments = (comments = []) => (
      comments.map(comment => (
        <EpisodeCommentItem
          body={comment.body}
          key={comment.id}
        />
      ))
    );


    return(
      <div>
        <EpisodeCommentForm />

      </div>
    );
  }


}
