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

      const currentUserOrNot = this.props.currentUser ? this.props.currentUser.username : "GUEST";

      return (
        <div className="watchlist-parent">
          <section className="watchlist-topbar">
            <button className="watchlist-topbar-title">
              {currentUserOrNot}{`'`}s Watchlist
            </button>
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
