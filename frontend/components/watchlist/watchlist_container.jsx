import { connect } from 'react-redux';
import Watchlist from './watchlist';
import { addEpisode, deleteEpisode } from '../../actions/watchlist_actions';

const mapStateToProps = state => {
  return {
    episodes: state.entities.watchlists.episodes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEpisode: episodeId => dispatch(addEpisode(episodeId)),
    deleteEpisode: watchlistAddId => dispatch(deleteEpisode(watchlistAddId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist);
