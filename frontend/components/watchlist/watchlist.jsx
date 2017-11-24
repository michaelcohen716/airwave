import React from 'react';
import WatchlistItem from './watchlist_item';

class Watchlist extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    let currentUserOrNot="";
    if (this.props.episodes.length > 0){
      const watchlistItems = this.props.episodes.map((e) => {
        return (
          <WatchlistItem episode={e} key={e.id}/>
        );
      });


      currentUserOrNot = (
        <section className="watchlist-topbar">
          <button className="watchlist-topbar-title">
            {this.props.currentUser.username}{`'`}s Watchlist
          </button>

        </section>
      );

      return (
        <div className="watchlist-parent">
          {currentUserOrNot}
          <section className="watchlist-index">
            {watchlistItems}
          </section>
        </div>
      );
    }

    else {
      return <div></div>;
    }
  }
}

export default Watchlist;
