import React from 'react';

class WatchlistItem extends React.Component {

  render(){
    const randUnwatched = Math.floor(Math.random() * 50);
    return (
      <div className="watchlist-item-outer">
        <div className="watchlist-item-status">
          {randUnwatched} Unwatched
        </div>
        <div className="watchlist-item-thumb">
          <button className="watchlist-item-thumb-pic">
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
      </div>
    );

  }


}



export default WatchlistItem;
