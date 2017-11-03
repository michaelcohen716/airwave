import { connect } from 'react-redux';
import EpisodeView from './episode_view';
import { fetchShowEpisode } from '../../actions/episode_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const episodeId = parseInt(ownProps.match.params.episodeId);

  let comments;
  if(state.entities.episodes[episodeId]){
    comments = state.entities.episodes[episodeId].commentIds.map(id => {
      return state.entities.comments[id];
    });
    if (comments.indexOf(undefined) > -1) {
      comments = [];
    }
  }
  else {
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
