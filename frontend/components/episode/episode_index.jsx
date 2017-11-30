import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchItem from '../search_item';
import { fetchEpisodes } from '../../actions/episode_actions';

class EpisodeIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchEpisodes();
  }

  render(){
    if(this.props.episodes){
      let episodes = this.props.episodes.map(episode => {
        return (
          <SearchItem key={episode.id}
            title={episode.title}
            description={episode.description}
            thumb={episode.thumb}
            id={episode.id}
            />
          );

        });
        return (
          <div className="search-results-parent">
            <div className="search-banner">
              All Episodes
            </div>
            <section className="search-index-container">
              {episodes}
            </section>
          </div>
        );
    } else {
      return <div></div>;
    }
  }
}


const mapStateToProps = (state) => {
  return {
    episodes: state.search.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEpisodes: () => dispatch(fetchEpisodes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeIndex);
