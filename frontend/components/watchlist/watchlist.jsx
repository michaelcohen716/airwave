import React from 'react';
import WatchlistItem from './watchlist_item';



const Watchlist = () => {




  return (
    <div className="watchlist-parent">
      <section className="watchlist-topbar">
        <div className="watchlist-topbar-title">
          Michael's Watchlist
        </div>
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
