import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class WatchlistItem extends React.Component {
  render(){

    const randUnwatched = Math.floor(Math.random() * 30);
    // debugger
    return (
      <Link to={`/episodes/${this.props.episode.id}`} className="watchlist-item-outer">
        <div className="watchlist-item-status">
          {randUnwatched} Unwatched
        </div>
        <div className="watchlist-item-thumb">
          <button className="watchlist-item-thumb-pic">
            <img src={this.props.series.imageUrl}/>
          </button>
        </div>
        <section className="watchlist-item-bottom">
          <button className="watchlist-item-command">
            Start Watching
          </button>
          <button className="watchlist-item-title">
            {this.props.episode.title}
          </button>
        </section>
      </Link>
    );

  }
}


const mapStateToProps = (state, { episode }) => {
  const series = state.entities.series[episode.series_id];
  return {
    series
  };
};




export default connect(mapStateToProps, null)(WatchlistItem);
