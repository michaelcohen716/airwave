import * as EpisodeUtil from '../util/watchlist_api_util';

export const RECEIVE_SHOW_EPISODE = "RECEIVE_SHOW_EPISODE";

export const receiveShowEpisode = episode => {
  return {
    type: RECEIVE_SHOW_EPISODE,
    episode
  };
};

export const fetchShowEpisode = id => dispatch => (
  EpisodeUtil.fetchShowEpisode(id).then(episode => dispatch(receiveShowEpisode(episode)))
);
