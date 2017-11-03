import EpisodeCommentForm from './episode_comment_form';
import EpisodeCommentItem from './episode_comment_item';
import React from 'react';

class EpisodeCommentIndex extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    // let comments = [];
    if(this.props.comments){
      console.log(this.props.comments);
      let comments = this.props.comments.map(comment => (
          <EpisodeCommentItem
            body={comment.body}
            key={comment.id}
          />
        )
      );

      return(
        <div>
          <EpisodeCommentForm />
          {comments}
        </div>
      );
    }else{
      return <div></div>;
    }
  }


}


export default EpisodeCommentIndex;
