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
        <button className="watchlist-item-thumb">
        </button>
        <button className="watchlist-item-command">
          Start Watching
        </button>
        <button className="watchlist-item-title">
          The Four Marx Brothers
        </button>
      </div>
    );
  }

}

export default WatchlistItem;
