import { connect } from 'react-redux';
import EpisodeView from './episode_view';
import { fetchShowEpisode } from '../../actions/episode_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const episodeId = parseInt(ownProps.match.params.episodeId);
  const comments = state.entitie.episodes[episodeId].commentIds.map(comment => {
    return state.entities.comments[comment.id];
  });
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
