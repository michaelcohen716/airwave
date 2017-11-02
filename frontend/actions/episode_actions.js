import * as EpisodeUtil from '../util/watchlist_api_util';

export const RECEIVE_SHOW_EPISODE = "RECEIVE_SHOW_EPISODE";

export const receiveShowEpisode = ({episode, comments}) => {
  return {
    type: RECEIVE_SHOW_EPISODE,
    episode,
    comments
  };
};

export const fetchShowEpisode = id => dispatch => (
  EpisodeUtil.fetchShowEpisode(id).then(payload => dispatch(receiveShowEpisode(payload)))
);
