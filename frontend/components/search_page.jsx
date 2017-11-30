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
            key={result.id}
            title={result.title}
            description={result.description}
            thumb={result.thumb}
            id={result.id}
            />
      ));
      return (
        <div className="search-results-parent">
          <div className="search-banner">
            Search Results
          </div>
          <section className="search-index-container">
            {results}
          </section>
        </div>
        );

    } else {
      return (
        <div className="search-results-parent">
          <div className="search-banner">
            Sorry, no results matching that search
          </div>

        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  let results = [];

  if(state.search){
    results = state.search.results;
  }
  return {
    results: results
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
