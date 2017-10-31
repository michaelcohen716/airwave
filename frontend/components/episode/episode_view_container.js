import { connect } from 'react-redux';
import EpisodeView from './episode_view';
import { fetchShowEpisode } from '../../actions/episode_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const episodeId = parseInt(ownProps.match.params.episodeId);

  return {
    episode: state.entities.episodes[episodeId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchShowEpisode: (id) => dispatch(fetchShowEpisode(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeView);
