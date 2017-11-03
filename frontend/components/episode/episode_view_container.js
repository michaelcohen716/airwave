import { connect } from 'react-redux';
import EpisodeView from './episode_view';
import { fetchShowEpisode } from '../../actions/episode_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const episodeId = parseInt(ownProps.match.params.episodeId);
  
  let comments;
  if(state.entities.episodes[episodeId]){
    comments = state.entities.episodes[episodeId].commentIds.map(comment => {
      return state.entities.comments[comment.id];
    });
  }else {
    comments =[];
  }
  return {
    episode: state.entities.episodes[episodeId],
    comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchShowEpisode: (id) => dispatch(fetchShowEpisode(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeView);
