import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


class ShowShow extends React.Component {
  constructor(props){
    super(props);
    // this.addEpisode = this.addEpisode.bind(this);
  }


  componentDidMount(){
    this.props.fetchSeries(this.props.match.params.seriesId);
  }



  render(){
    if(this.props.episodes[0] !== undefined){
      const firstEpisode = this.props.episodes[0];
      return (
        <div className="showshow-grandparent">
          <div className="showshow-background">
            <img src={this.props.series.imageUrl} />
          </div>
          <section className="showshow-details">
            <div className="showshow-details-left">
              <Link to={`/episodes/${firstEpisode.id}`} className="showshow-command">
                Start Watching
              </Link>
              <Link to={`/episodes/${firstEpisode.id}`} className="showshow-queued">
                <img src={this.props.series.imageUrl} />
              </Link>
              <span className="showshow-queued-title">

              </span>
            </div>
            <div className="showshow-details-right">
              <section className="showshow-details-engagement">
                <span className="rating fa fa-star"></span>
                <span className="rating fa fa-star"></span>
                <span className="rating fa fa-star"></span>
                <span className="rating fa fa-star-half-o"></span>
                <span className="rating fa fa-star-o"></span>

                <button className="add-to-watchlist fa fa-plus"
                  >
                </button>
                <span className="text-watchlist">watchlist</span>

                <span className="fb-watchlist fa fa-facebook-official"></span>
                <span className="fb-watchlist-text"> facebook</span>

                <span className="twitter-watchlist fa fa-twitter"></span>
                <span className="twitter-watchlist-text"> twitter</span>
              </section>
              <section className="showshow-profile">
                <div className="showshow-profile-description">
                  <strong className="showshow-bold-title">
                    {this.props.series.name}:
                  </strong> {' '}
                  {this.props.series.description}
                </div>
              </section>
            </div>
          </section>
          <section className="showshow-episodes">
          </section>
        </div>
      );
    }
    else {
      return <div></div>;
    }
  }
}


export default ShowShow;
