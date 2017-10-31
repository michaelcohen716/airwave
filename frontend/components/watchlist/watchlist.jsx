import React from 'react';
import WatchlistItem from './watchlist_item';



const Watchlist = ({currentUser, episodes}) => {

  const watchlistItems = episodes.map((e) => {
    return (
      <WatchlistItem episode={e} key={e.id} />
    )
  })


  return (
    <div className="watchlist-parent">
      <section className="watchlist-topbar">
        <button className="watchlist-topbar-title">

        </button>
      </section>
      <section className="watchlist-index">
        {watchlistItems}
      </section>
    </div>
  );
};

export default Watchlist;
