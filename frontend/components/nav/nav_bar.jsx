import React from 'react';
import SearchBar from './search_bar';
import { Link } from 'react-router-dom';
import NavBarDropdownTV from './nav_bar_dropdown_tv';

export const NavBar = ({currentUser, openModal, logout}) => {

  const freeTrialOrNot = currentUser === null ? "START YOUR FREE TRIAL" : "GET LIVE TV";
  const usernameOrNot = currentUser === null ? "LOG IN" : (currentUser.username);

  const showLogout = currentUser ?
                    (<div>
                      <button className="dropdown-button">
                        <span className="username">{usernameOrNot}</span>
                      </button>
                      <div className="dropdown-content">
                        <button className="dropdown-content-link" onClick={logout} >
                          Logout
                        </button>
                      </div>
                    </div>
                    )
                    :(<div>
                      <button className="dropdown-button" onClick={(e)=>openModal("login")}>
                        <span className="username">{usernameOrNot}</span>
                      </button>
                    </div>
                    );
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

          <section className="airwave-logo">
            airwave
          </section>

          <ul>

            <NavBarDropdownTV />

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
            {showFreeTrial}
          </span>

          <span className="account-dropdown">
            {showLogout}
          </span>
        </section>
      </div>
    </div>
    );
  };



export default NavBar;
