import React from 'react';
import { withRouter} from 'react-router-dom';
import { fetchSearchResults } from '../../actions/search_actions';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {input: ""};
    this.search = this.search.bind(this);
  }

  search(){
    this.props.fetchSearchResults(this.state.input);
    this.props.history.push('/search');
  }

  searchTitles(titles){

  }

  update(field){
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render(){

    return (
      <div className="search-parent">
        <form className="search-bar-input" onSubmit={this.search}>
          <input type="text" placeholder="" onChange={this.update("input")}>
          </input>
          <div className="button-holder">
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSearchResults: (input) => dispatch(fetchSearchResults(input))
  };
};


export default withRouter(connect(
  null,
  mapDispatchToProps
)(SearchBar));
