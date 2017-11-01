import { connect } from 'react-redux';
import Watchlist from './watchlist';
import { fetchRandomWatchlist, addEpisode, deleteEpisode } from '../../actions/watchlist_actions';

const mapStateToProps = state => {
  console.log(state);
  let watchlistIds;

  if (state.session.currentUser) {
    watchlistIds = state.session.currentUser.watchlistIds;
  }

  if (!watchlistIds) {
    watchlistIds = [];
  }

  let watchlistEpisodes = watchlistIds.map(id => {
    return state.entities.episodes[id];
  });

  let watchlistEpisodeIds = watchlistEpisodes.map(epi => {
    return epi.series_id;
  });

  let watchlistSeries = watchlistEpisodeIds.map(id => {
    return state.entities.series[id];
  });

  return {
    currentUser: state.session.currentUser,
    episodes: watchlistEpisodes,
    series: watchlistSeries
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
