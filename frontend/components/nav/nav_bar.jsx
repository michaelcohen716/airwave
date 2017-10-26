import React from 'react';
import SearchBar from './search_bar';
import { Link } from 'react-router-dom';


export const NavBar = ({currentUser, openModal, logout}) => {

  const freeTrialOrNot = currentUser === null ? "START YOUR FREE TRIAL" : "GET LIVE TV";
  const usernameOrNot = currentUser === null ? "LOG IN" : (currentUser.username);

  return(
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
            <button className="dropdown-button" onClick={(e)=>openModal("signup")}>
              {freeTrialOrNot}
            </button>
          </span>

          <span className="account-dropdown">
            <button className="dropdown-button" onClick={(e)=>openModal("login")}>
              <span className="username">{usernameOrNot}</span>
            </button>
            <div className="dropdown-content">
              <button className="dropdown-content-link" onClick={logout}>
                Logout
              </button>
            </div>
          </span>

        </section>

      </div>

    </div>
    );
  };



export default NavBar;
