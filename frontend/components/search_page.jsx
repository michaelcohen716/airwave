import React from 'react';
import SearchItem from './search_item';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';


class SearchPage extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    if(this.props.results){
      let results = this.props.results.map(result => (
        <SearchItem
          series={result.series}
          title={result.title}
          description={result.description}
          thumb={result.thumb}
        />
      ));
      return (
        <div className="search-results-parent">
          <div className="search-banner">
            Search Results for "search input"
          </div>
          <section className="search-index-container">
            <SearchItem />
              <SearchItem />
              </section>
            </div>
          );

    } else {
      return (
        <div className="search-results-parent">
          <div className="search-banner">
            Search Results for "search input"
          </div>
          <section className="search-index-container">
            <SearchItem />
            <SearchItem />
          </section>    
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    results: state.search.results
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    search: results => dispatch(search(results))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage));
