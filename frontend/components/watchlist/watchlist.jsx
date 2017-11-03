import React from 'react';
import WatchlistItem from './watchlist_item';



class Watchlist extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    if (this.props.episodes ){
      const watchlistItems = this.props.episodes.map((e) => {
        return (
          <WatchlistItem episode={e} key={e.id}/>
        );
      });

      if (this.props.currentUser){
        const currentUserOrNot =(
          <button className="watchlist-topbar-title">
            {currentUser.username}{`'`}s Watchlist
          </button>
        );
    }else {
      const currentUserOrNot = "";
    }

      return (
        <div className="watchlist-parent">
          <section className="watchlist-topbar">
            {currentUserOrNot}
          </section>
          <section className="watchlist-index">
            {watchlistItems}
          </section>
        </div>
      );
    }else {
      return <div></div>;
    }

  }
}


export default Watchlist;
