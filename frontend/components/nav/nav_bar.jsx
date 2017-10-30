import React from 'react';
import SearchBar from './search_bar';
import { Link } from 'react-router-dom';
import NavBarDropdownTV from './nav_bar_dropdown_tv';
import NavBarDropdownMovies from './nav_bar_dropdown_movies';
import NavBarDropdownAccount from './nav_bar_dropdown_account';
import { withRouter } from 'react-router-dom';

export const NavBar = ({currentUser, openModal, logout, history}) => {

  const freeTrialOrNot = currentUser === null ? "START YOUR FREE TRIAL" : "GET LIVE TV";

  const showFreeTrial = currentUser ?
                      (
                        <button className="dropdown-button">
                          {freeTrialOrNot}
                        </button>
                      ) :
                      (
                        <button className="dropdown-button" onClick={(e)=>openModal("signup")}>
                          {freeTrialOrNot}
                        </button>
                      )

  return(
      <div className="nav-bar">

        <div className="nav-bar-left">

          <button className="airwave-logo" onClick={() => history.push('/')}>
            airwave
          </button>

          <ul>
            <NavBarDropdownTV />
            <NavBarDropdownMovies />

            <li className="banner-dropdown">
              <button className="dropdown-button">
                KIDS
              </button>
            </li>

            <li className="banner-dropdown">
              <button className="dropdown-button">
                ADD-ONS
              </button>
            </li>
          </ul>

          <SearchBar />
        </div>

      <div className="nav-bar-right">
        <section>
          <span className="banner-dropdown">
            {showFreeTrial}
          </span>

          <NavBarDropdownAccount currentUser={currentUser}
                                 logout={logout}
                                 openModal={openModal}/>
        </section>
      </div>
    </div>
    );
  };



export default withRouter(NavBar);
