import React from 'react';


class WatchlistItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="watchlist-item-outer">
        <div className="watchlist-item-status">
          32 Unwatched
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
            Passage on the Lady Anne
          </button>
        </section>
      </div>
    );
  }

}

export default WatchlistItem;
