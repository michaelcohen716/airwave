import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addEpisode } from '../../actions/episode_actions';

class EpisodeShowWatchlistItem extends React.Component {
  constructor(props){
    super(props);
    // this.addEpisode = this.addEpisode.bind(this);
  }

  render(){
    return (
      <div className="episode-watchlist-item-outer">


      </div>

    );
  }


}

const mapStateToProps = (state, { episode }) => {
  // const series = state.entities.series[episode.series_id];
  // return {
  //   series,
  //   episodeId: episode.id
  // };
};

const mapDispatchToProps = dispatch => {

  // return {
  //   addEpisode: id => dispatch(addEpisode(id))
  // };

};


export default connect(mapStateToProps, mapDispatchToProps)(EpisodeShowWatchlistItem);


// comments
