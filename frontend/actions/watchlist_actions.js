import * as WatchlistUtil from '../util/watchlist_api_util';

export const RECEIVE_WATCHLIST_ADD = "RECEIVE_WATCHLIST_ADD";
export const RECEIVE_WATCHLIST = "RECEIVE_WATCHLIST";



export const receiveWatchlist = ({episodes}) => {
  return {
    type: RECEIVE_WATCHLIST,
    episodes
  };
};

export const fetchWatchlist = () => dispatch => {
  return WatchlistUtil.fetchWatchlist().then(payload => dispatch(RECEIVE_WATCHLIST(payload)));
}

export const fetchRandomWatchlist = () => dispatch => {
  return WatchlistUtil.fetchRandomWatchlist().then(payload => dispatch(RECEIVE_WATCHLIST(payload)));
}










export const addEpisode = episodeId => dispatch => {
  return WatchlistUtil.addEpisode(episodeId).then(dispatch(RECEIVE_WATCHLIST_ADD(episodeId)));
};

export const deleteEpisode = watchlistAddId => dispatch => {
  return WatchlistUtil.deleteEpisode(watchlistAddId).then(dispatch(RECEIVE_WATCHLIST_ADD(null)));
};


export const receiveWatchlistAdd = (episodeId) => {
  return {
    type: RECEIVE_WATCHLIST_ADD,
    episodeId
  };
};
