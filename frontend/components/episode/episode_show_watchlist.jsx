import React from 'react';
import EpisodeShowWatchlistItem from './episode_show_watchlist_item';

class EpisodeShowWatchlist extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    // if(this.props.episode){
    //   // const watchlistItems =
    //

      return (
        <div className="episode-show-watchlist-parent">
          <section className="episode-watchlist-topbar">
            <button className="watchlist-topbar-title">
              EPISODES
            </button>
          </section>
          <section className="watchlist-index">
            <EpisodeShowWatchlistItem />
            <EpisodeShowWatchlistItem />
            <EpisodeShowWatchlistItem />
            <EpisodeShowWatchlistItem />
          </section>

        </div>
      );
    // }else {
    //   return <div></div>;
    // }
  }


}

export default EpisodeShowWatchlist;
