import React from 'react';


const WatchlistItem = ({episode}) => {

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
          {episode.title}
        </button>
      </section>
    </div>
  );


}

export default WatchlistItem;
