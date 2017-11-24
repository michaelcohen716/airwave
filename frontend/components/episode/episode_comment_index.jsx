import EpisodeCommentForm from './episode_comment_form';
import EpisodeCommentItem from './episode_comment_item';
import React from 'react';

class EpisodeCommentIndex extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    if(this.props.comments){
      console.log(this.props.comments);
      let comments = this.props.comments.map(comment => (
          <EpisodeCommentItem
            body={comment.body}
            key={comment.id}
            username={comment.username}
          />
        )
      );

      return(
        <div className="comment-holder">
          <EpisodeCommentForm />
          <div className="comments-index-holder">
            {comments}
          </div>
        </div>
      );
    }else{
      return <div></div>;
    }
  }


}


export default EpisodeCommentIndex;
