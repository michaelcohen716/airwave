import React from 'react';
import { withRouter } from 'react-router-dom';

class NavBarDropdownTV extends React.Component {

  render(){
    return (
      <span className="banner-dropdown">
        <button className="dropdown-button" onClick={() => history.push('/episodes')}>
          TV
        </button>
      </span>
    );
  }
}

export default withRouter(NavBarDropdownTV);

// <div className="dropdown-content hidden">
//   <div className="dropdown-content-holder hidden">
//     <button className="dropdown-content-link">
//       Popular
//     </button>
//     <button className="dropdown-content-link">
//       Recently Added
//     </button>
//     <button className="dropdown-content-link">
//       Genres
//     </button>
//     <button className="dropdown-content-link">
//       Staff Picks
//     </button>
//     <button className="dropdown-content-link">
//       Networks
//     </button>
//   </div>
// </div>
