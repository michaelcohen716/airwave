import * as EpisodeUtil from '../util/watchlist_api_util';
import * as SearchUtil from '../util/search_util';

export const RECEIVE_SHOW_EPISODE = "RECEIVE_SHOW_EPISODE";
export const RECEIVE_EPISODES = "RECEIVE_EPISODES";

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


export const fetchEpisodes = () => dispatch => (
  SearchUtil.fetchEpisodes().then(episodes => dispatch(receiveEpisodes(episodes)))
)

export const receiveEpisodes = (episodes) => {
  return {
    type: RECEIVE_EPISODES,
    episodes
  }
}
