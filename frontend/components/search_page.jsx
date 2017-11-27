import React from 'react';
import SearchItem from './search_item';

class SearchPage extends React.Component {
  constructor(props){
    super(props);

  }

  render(){

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

export default SearchPage;
