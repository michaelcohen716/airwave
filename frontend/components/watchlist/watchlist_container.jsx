import { connect } from 'react-redux';
import Watchlist from './watchlist';
import { fetchWatchlist, addEpisode, deleteEpisode } from '../../actions/watchlist_actions';

const mapStateToProps = state => {
  // console.log(state);
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

  // let watchlistSeriesIds = watchlistEpisodes.map(epi => {
  //   return epi.series_id;
  // });
  //
  // console.log(state);
  // let watchlistSeries = watchlistSeriesIds.map(id => {
  //   return state.entities.series[id];
  // });

  return {
    currentUser: state.session.currentUser,
    episodes: watchlistEpisodes,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWatchlist: () => dispatch(fetchWatchlist()),
    addEpisode: episodeId => dispatch(addEpisode(episodeId)),
    deleteEpisode: watchlistAddId => dispatch(deleteEpisode(watchlistAddId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist);
