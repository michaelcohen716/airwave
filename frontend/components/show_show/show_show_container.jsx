import { connect } from 'react-redux';
import ShowShow from './show_show';
import { withRouter } from 'react-router-dom';
import { fetchSeries, addEpisode } from '../../actions/watchlist_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const seriesId = parseInt(ownProps.match.params.seriesId);

  let episodeIds = state.entities.series[seriesId].episodeIds;

  let seriesEpisodes = episodeIds.map(id => {
    return state.entities.episodes[id];
  });

  return {
    series: state.entities.series[seriesId],
    episodes: seriesEpisodes
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchSeries: id => dispatch(fetchSeries(id)),
    addEpisode: episodeId => dispatch(addEpisode(episodeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowShow);
