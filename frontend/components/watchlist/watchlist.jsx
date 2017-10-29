import React from 'react';
import WatchlistItem from './watchlist_item';



const Watchlist = () => {




  return (
    <div className="watchlist-parent">
      <section className="watchlist-topbar">
        <button className="watchlist-topbar-title">
          Michael's Watchlist
        </button>
      </section>
      <section className="watchlist-index">
        <WatchlistItem />
        <WatchlistItem />
        <WatchlistItem />
        <WatchlistItem />
      </section>
    </div>
  );
};

export default Watchlist;
