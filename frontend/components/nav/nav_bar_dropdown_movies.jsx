import React from 'react';

class NavBarDropdownMovies extends React.Component {

  render(){
    return (
      <span className="banner-dropdown">
        <button className="dropdown-button">
          MOVIES
        </button>
        <div className="dropdown-content">
          <div className="dropdown-content-holder">
            <button className="dropdown-content-link">
              Documentaries
            </button>
            <button className="dropdown-content-link">
              Genres
            </button>
            <button className="dropdown-content-link">
              Airwave Movie Night
            </button>
            <button className="dropdown-content-link">
              Staff Picks
            </button>
          </div>
        </div>
      </span>
    );
  }
}

export default NavBarDropdownMovies;
