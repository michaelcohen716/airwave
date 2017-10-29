import * as WatchlistUtil from '../util/watchlist_api_util';

export const RECEIVE_WATCHLIST_ADD = "RECEIVE_WATCHLIST_ADD";
export const RECEIVE_WATCHLIST = "RECEIVE_WATCHLIST";

export const addEpisode = episodeId => dispatch => {
  return WatchlistUtil.addEpisode(episodeId).then(dispatch(RECEIVE_WATCHLIST_ADD(episodeId)));
};

export const deleteEpisode = episodeId => dispatch => {
  return WatchlistUtil.deleteEpisode(episodeId).then(dispatch(RECEIVE_WATCHLIST_ADD(null)));
};


export const receiveWatchlistAdd = (episodeId) => {
  return {
    type: RECEIVE_WATCHLIST_ADD,
    episodeId
  };
};
