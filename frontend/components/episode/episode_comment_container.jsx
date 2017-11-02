import { connect } from 'react-redux';
import EpisodeCommentIndex from './episode_comment_index';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, { match }) => {
  const episodeId = parseInt(match.params.episodeId);
  // const comments = state.entities.episodes[episodeId].comments;

  return {
    comments
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};


//not necessary anymore
