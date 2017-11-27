import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inWatchlist: false
    };
  }

  render(){

    return (
      <div className="search-item-outer">
        <section className="search-item-description watchlist-item-thumb">

        </section>
      </div>
    );
  }
}

// <Link to={`/episodes/${this.props.episode.id}`} className="search-thumb-outer">
//
// </Link>
export default SearchItem;
