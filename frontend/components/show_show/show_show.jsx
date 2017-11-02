import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


class ShowShow extends React.Component {
  constructor(props){
    super(props);
  }


  render(){


    return (
      <div>
        <div className="showshow-background">
        </div>
        <section className="showshow-details">
          <div className="showshow-details-left">
            <div className="showshow-command">
              Start Watching
            </div>
            <div className="showshow-queued">

            </div>
            <span className="showshow-queued-title">
              Season 1, Episode 1
            </span>
          </div>
          <div className="showshow-details-right">
            <section className="showshow-details-engagement">
              <span className="rating fa fa-star"></span>
              <span className="rating fa fa-star"></span>
              <span className="rating fa fa-star"></span>
              <span className="rating fa fa-star-half-o"></span>
              <span className="rating fa fa-star-o"></span>

              <button className="add-to-watchlist fa fa-plus">
              </button>
              <span className="text-watchlist">watchlist</span>

              <span className="fb-watchlist fa fa-facebook-official"></span>
          </section>
          </div>
        </section>
        <section className="showshow-episodes">

        </section>
      </div>
    );
  }

}


export default ShowShow;
