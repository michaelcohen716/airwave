import * as EpisodeUtil from '../util/watchlist_api_util';

export const RECEIVE_SHOW_EPISODE = "RECEIVE_SHOW_EPISODE";

export const receiveShowEpisode = episodeId => {
  return {
    type: RECEIVE_SHOW_EPISODE,
    episodeId
  };
};

export const fetchShowEpisode = id => dispatch => (
  EpisodeUtil.fetchShowEpisode(id).then(episode => dispatch(receiveShowEpisode(episode)))
);
