import * as WatchlistUtil from '../util/watchlist_api_util';

export const RECEIVE_WATCHLIST_ADD = "RECEIVE_WATCHLIST_ADD";
export const RECEIVE_WATCHLIST = "RECEIVE_WATCHLIST";
export const RECEIVE_SERIES = "RECEIVE_SERIES";

export const receiveWatchlist = ({episodes}) => {
  return {
    type: RECEIVE_WATCHLIST,
    episodes
  };
};


export const fetchSeries = (seriesId) => dispatch => {
  return WatchlistUtil.fetchSeries(seriesId).then(payload => dispatch(receiveSeries(payload)));
}

// singular series
export const receiveSeries = ({series, episodes}) => {
  return {
    type: RECEIVE_SERIES,
    series,
    episodes
  }
}


export const addEpisode = episodeId => dispatch => {
  return WatchlistUtil.addEpisode(episodeId).then(dispatch(receiveWatchlistAdd(episodeId)));
};

export const receiveWatchlistAdd = (episodeId) => {
  return {
    type: RECEIVE_WATCHLIST_ADD,
    episodeId
  };
};

export const deleteEpisode = watchlistAddId => dispatch => {
  return WatchlistUtil.deleteEpisode(watchlistAddId).then(dispatch(receiveWatchlistAdd(null)));
};
