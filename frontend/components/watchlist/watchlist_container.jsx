import { connect } from 'react-redux';
import Watchlist from './watchlist';
import { addEpisode, deleteEpisode } from '../../actions/watchlist_actions';

const mapStateToProps = state => {

  let watchlistIds = state.session.currentUser.watchlistIds;
  let watchlistEpisodes = watchlistIds.map(id => {
    return state.entities.episodes[id];
  });
  return {
    currentUser: state.session.currentUser,
    episodes: watchlistEpisodes
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
