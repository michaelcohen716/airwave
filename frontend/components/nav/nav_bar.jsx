import React from 'react';
import SearchBar from './search_bar';

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
        <ul>
          <li className="banner-dropdown">
            GET LIVE TV
          </li>

          <li className="banner-dropdown">
            USERNAME
          </li>

        </ul>

      </div>
      
    </div>
    );
  }
}


export default NavBar;
