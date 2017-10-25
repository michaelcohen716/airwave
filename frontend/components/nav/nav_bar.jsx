import React from 'react';
import SearchBar from './search_bar';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="nav-bar">

        <div className="nav-bar-left">

          <section className="airwave-logo">
            airwave
          </section>

          <ul>

            <li className="banner-dropdown">
              TV
            </li>

            <li className="banner-dropdown">
              MOVIES
            </li>

            <li className="banner-dropdown">
              KIDS
            </li>

            <li className="banner-dropdown">
              ADD-ONS
            </li>
          </ul>

          <SearchBar />
        </div>

      <div className="nav-bar-right">
        <section>
          <span className="banner-dropdown">
            GET LIVE TV
          </span>

          <span className="account-dropdown">
            <button className="dropdown-button">
              {this.props.currentUser.username}
            </button>
            <div className="dropdown-content">
              <Link className="dropdown-content-link" to="/">Logout</Link>
            </div>
          </span>

        </section>

      </div>

    </div>
    );
  }
}


export default NavBar;
