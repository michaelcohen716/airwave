import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inWatchlist: false
    };
    this.thumb = this.props.thumb;
    this.title = this.props.title;
    this.description = this.props.description;
    this.id = this.props.id;
  }

  render(){

    return (
      <div className="search-item-outer">
        <section className="search-item-description">
          <Link to={`/episodes/${this.props.id}`} className="search-thumb-holder">
            <img className="search-thumb" src={this.thumb} id="search-thumb"/>
          </Link>

          <section className="search-side-holder">
            <Link to={`/episodes/${this.props.id}`} className="search-episode">
              {this.title}
            </Link>
            <div className="search-description">
              {this.description}
            </div>
          </section>

        </section>
      </div>
    );
  }
}

// <Link to={`/episodes/${this.props.episode.id}`} className="search-thumb-outer">
//
// </Link>
export default SearchItem;
